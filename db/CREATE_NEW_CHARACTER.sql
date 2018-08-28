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
}', '{
    "check1": "false",
    "check2": "false",
    "check3": "false",
    "check4": "false",
    "check5": "false",
    "check6": "false",
    "check7": "false",
    "check8": "false",
    "check9": "false",
    "check10": "false",
    "check11": "false",
    "check12": "false",
    "check13": "false",
    "check14": "false",
    "check15": "false",
    "check16": "false",
    "check17": "false",
    "check18": "false"
}', array[]::text[])