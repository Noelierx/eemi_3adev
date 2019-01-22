//
//  Score.swift
//  ScoreApp
//
//  Created by Pixrr on 30/12/2018.
//  Copyright © 2018 Pixrr. All rights reserved.
//

import Foundation

struct ScoreItem: Codable {
    let result: String
    let date: String
}

extension Date {
    func asString(style: DateFormatter.Style) -> String {
        let dateFormatter = DateFormatter()
        dateFormatter.dateStyle = style
        return dateFormatter.string(from: self)
    }
}
