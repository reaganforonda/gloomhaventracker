INSERT INTO characters
(user_id, class_id, character_name, level, experience, gold, retired, items, checkmarks, perks)
VALUES
($1, $2, $3, 1, 0, 30, false, '{
    "Head":"",
    "Body":"",
    "One Hand":"",
    "Two Hands": "",
    "Legs":"",
    "Small Item":""
}', $4, $5)