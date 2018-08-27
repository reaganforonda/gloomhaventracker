UPDATE TABLE characters
SET character_name = $1,
    level=$2,
    experience=$3;