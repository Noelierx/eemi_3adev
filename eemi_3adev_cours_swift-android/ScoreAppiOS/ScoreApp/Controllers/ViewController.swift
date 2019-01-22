//
//  ViewController.swift
//  ScoreApp
//
//  Created by Pixrr on 25/12/2018.
//  Copyright © 2018 Pixrr. All rights reserved.
//

import UIKit
import KituraKit

class ViewController: UIViewController {

    var scoreResults: [ScoreItem] = [ScoreItem]()
    var currentScoreItem: ScoreItem = ScoreItem(result: "0", date: "")
    var score = 0
    @IBOutlet weak var counter: UILabel!
    @IBOutlet weak var increment: UIButton!
    @IBOutlet weak var decrement: UIButton!
    @IBOutlet weak var save: UIButton!
    @IBOutlet weak var reset: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        counter.text = String(score)
        // Do any additional setup after loading the view, typically from a nib.
    }
    
    private func updateScore() {
        guard let client = KituraKit(baseURL: "http://127.0.0.1:8080/") else {
            print("Error creating KituraKit client")
            return
        }
        
        client.post("/scores", data: self.currentScoreItem)
        { (scoreResults: [ScoreItem]?, error: Error?) in
            guard error == nil else {
                print("Error saving score to Kitura: \(error!)")
                return
            }
            
            guard let scoreResults = scoreResults else {
                self.scoreResults = [ScoreItem]()
                return
            }
            DispatchQueue.main.async {
                self.scoreResults = scoreResults
            }
        }
        return
    }
    
    @IBAction func increment(_ sender: Any) {
        score += 1
        counter.text = String(score)
    }
    
    @IBAction func decrement(_ sender: Any) {
        score -= 1
        counter.text = String(score)
    }
    
    @IBAction func reset(_ sender: Any) {
        score = 0
        counter.text = String(score)
        scoreResults = []
    }
    
    @IBAction func save(_ sender: Any) {
        if let vc = self.storyboard?.instantiateViewController(withIdentifier: "scoreResults") as? ScoreViewController {
            let date = Date()
            
            currentScoreItem = ScoreItem.init(
                result: String(score),
                date: date.asString(style: .short)
            )
            
            updateScore()
//            scoreResults.append(
//                ScoreItem.init(
//                    result: String(score),
//                    date: date.asString(style: .short)
//                )
//            )
            score = 0
            vc.scoreResults = scoreResults
            self.navigationController?.pushViewController(vc, animated: true)
        }
        counter.text = String(0)
    }
    

}
