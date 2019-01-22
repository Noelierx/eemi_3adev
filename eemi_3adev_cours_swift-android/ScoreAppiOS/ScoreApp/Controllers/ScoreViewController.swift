//
//  ScoreViewController.swift
//  ScoreApp
//
//  Created by Pixrr on 25/12/2018.
//  Copyright © 2018 Pixrr. All rights reserved.
//

import UIKit
import KituraKit

class ScoreViewController: UIViewController, UITableViewDataSource {
    
    @IBOutlet weak var tableView: UITableView!
    
    var scoreResults: [ScoreItem] = [ScoreItem]()
    let CellIdentifier = "com.codepath.MyFirstTableViewCell"
    
    override func viewDidLoad() {
        super.viewDidLoad()
        loadScores()
        tableView.dataSource = self
        tableView.register(UITableViewCell.self, forCellReuseIdentifier: CellIdentifier)
        // Do any additional setup after loading the view, typically from a nib.
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
    }
    
    private func loadScores() {
        guard let client = KituraKit(baseURL: "http://127.0.0.1:8080/") else {
            print("Error creating KituraKit client")
            return
        }
        
        client.get("/scores") { (scoreCollection: [ScoreItem]?, error: Error?) -> Void in
            
            guard let scoreCollection = scoreCollection else {
                print("Error in reading user. error code \(String(describing:error))")
                return
            }
            DispatchQueue.main.async {
                self.scoreResults = scoreCollection
                self.tableView.reloadData()
            }
        }
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: CellIdentifier, for: indexPath)
        cell.textLabel?.text = scoreResults[indexPath.row].result + " - " + scoreResults[indexPath.row].date
        return cell
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return scoreResults.count
    }
}
