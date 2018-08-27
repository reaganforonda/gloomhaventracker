UPDATE characters
SET character_name = $2,
    level=$3,
    experience=$4,
    gold=$5
WHERE character_id = $1;