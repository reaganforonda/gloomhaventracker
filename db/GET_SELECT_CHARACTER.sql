SELECT character_id, user_id, party_id, characters.class_id, character_name, experience, level, gold, retired, items, classes.class_name as class_name, checkmarks, perks
FROM characters
JOIN classes
ON classes.class_id = characters.class_id
WHERE characters.character_id = $1