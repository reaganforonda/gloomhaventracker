SELECT character_id, user_id, party_id, characters.class_id, character_name, experience, level, gold, retired, items, classes.class_name as class_name
FROM characters
JOIN classes
ON classes.class_id = characters.class_id
WHERE characters.user_id = $1