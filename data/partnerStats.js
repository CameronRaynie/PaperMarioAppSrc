const partnerList =
    [
        {
            "party":0,
            "name": "Goombella",
            "hitpoints": {
                "baseHP": "10",
                "superHP": "20",
                "ultraHP": "30"
            },
            "defense": "0",

            "attacks": [
                {
                    "name": "Headbonk",
                    "rank": "base",
                    "damage": {
                        "baseDamage": "2",
                        "superDamage": "4",
                        "ultraDamage": "6"
                    },
                    "fpUsed": "0",
                    "description": "Bonk an enemy twice by bouncing off their head, each bonk does half the total damage."
                },
                {
                    "name": "Tattle",
                    "rank": "base",
                    "damage": {
                        "baseDamage": "0",
                        "superDamage": "0",
                        "ultraDamage": "0"
                    },
                    "fpUsed": "0",
                    "description": "Shows enemy health meter and battle information."
                },
                {
                    "name": "Multibonk",
                    "rank": "super",
                    "damage": {
                        "baseDamage": "0",
                        "superDamage": "2",
                        "ultraDamage": "3"
                    },
                    "fpUsed": "3",
                    "description": "Bonk an enemy repeatedly until the action command is missed."
                },
                {
                    "name": "Rally Wink",
                    "rank": "ultra",
                    "damage": {
                        "baseDamage": "0",
                        "superDamage": "0",
                        "ultraDamage": "0"
                    },
                    "fpUsed": "4",
                    "description": "Allows Mario to act again this turn."
                }
            ],
            "image": "Goombella.png",
            "description":"A second year archeology student, her special ability gives Mario information on locations and enemies.<br><br>In battle, Goombella is an all-around damage dealer. She can also grant Mario extra turns and has the ability to deal damage to any enemy in the field, as long as they aren't spiked."
        },
        {
            "party":1,
            "name": "Koops",
            "hitpoints": {
                "baseHP": "10",
                "superHP": "15",
                "ultraHP": "25"
            },
            "defense": "1",

            "attacks": [
                {
                    "name": "Shell Toss",
                    "rank": "base",
                    "damage": {
                        "baseDamage": "2",
                        "superDamage": "3",
                        "ultraDamage": "5"
                    },
                    "fpUsed": "0",
                    "description": "Attack a single ground enemy with Koops shell."
                },
                {
                    "name": "Power Shell",
                    "rank": "base",
                    "damage": {
                        "baseDamage": "2",
                        "superDamage": "3",
                        "ultraDamage": "5"
                    },
                    "fpUsed": "3",
                    "description": "Attack all ground enemies with Koops shell."
                },
                {
                    "name": "Shell Shield",
                    "rank": "super",
                    "damage": {
                        "baseDamage": "0",
                        "superDamage": "0",
                        "ultraDamage": "0"
                    },
                    "fpUsed": "4",
                    "description": "Create a Shell to defend Mario from attacks."
                },
                {
                    "name": "Shell Slam",
                    "rank": "ultra",
                    "damage": {
                        "baseDamage": "0",
                        "superDamage": "0",
                        "ultraDamage": "25"
                    },
                    "fpUsed": "6",
                    "description": "Attack all ground enemies and ignore their defense."
                }
            ],
            "image": "Koops.png",
            "description":"A Shy Koopa from Petalburg, his special ability allows Mario to throw his shell at enemies and objects.<br><br>In battle, Koops specializes in attacking ground enemies. His shell grants him one defense, but he can be knocked over if an enemy jumps on him. If knocked over Koops will be stunned and defenseless  for a turn."
        },
        {
            "party":2,
            "name": "Flurrie",
            "hitpoints": {
                "baseHP": "15",
                "superHP": "25",
                "ultraHP": "35"
            },
            "defense": "0",

            "attacks": [
                {
                    "name": "Body Slam",
                    "rank": "base",
                    "damage": {
                        "baseDamage": "2",
                        "superDamage": "4",
                        "ultraDamage": "6"
                    },
                    "fpUsed": "0",
                    "description": "Body Slam a single enemey."
                },
                {
                    "name": "Gale Force",
                    "rank": "base",
                    "damage": {
                        "baseDamage": "0",
                        "superDamage": "0",
                        "ultraDamage": "0"
                    },
                    "fpUsed": "4",
                    "description": "A strong gust of wind that can blow enemies out of battle."
                },
                {
                    "name": "Lip Lock",
                    "rank": "super",
                    "damage": {
                        "baseDamage": "0",
                        "superDamage": "4",
                        "ultraDamage": "6"
                    },
                    "fpUsed": "3",
                    "description": "An attack that steals enemy HP and ignores their defense."
                },
                {
                    "name": "Dodgy Fog",
                    "rank": "ultra",
                    "damage": {
                        "baseDamage": "0",
                        "superDamage": "0",
                        "ultraDamage": "0"
                    },
                    "fpUsed": "4",
                    "description": "Create a fog that makes mario harder to hit for several turns."
                }
            ],
            "image": "Flurrie.png",
            "description":"A wind spirit from the Twilight Forest, Flurrie's special ability allows Mario to blow away enemies and hidden panels.<br><br>In battle, Flurrie has more hitpoints than most party members and can even steal HP from enemies. Body Slam is capable of hitting most enemies and Gale Force can be used to remove weak enemies from battle."
        },
        {
            "party":3,
            "name": "Yoshi",
            "hitpoints": {
                "baseHP": "10",
                "superHP": "20",
                "ultraHP": "30"
            },
            "defense": "0",

            "attacks": [
                {
                    "name": "Ground Pound",
                    "rank": "base",
                    "damage": {
                        "baseDamage": "4",
                        "superDamage": "5",
                        "ultraDamage": "6"
                    },
                    "fpUsed": "0",
                    "description": "Rapidly bounce on a single enemy, each bounce only does 1 damage."
                },
                {
                    "name": "Gulp",
                    "rank": "base",
                    "damage": {
                        "baseDamage": "4",
                        "superDamage": "5",
                        "ultraDamage": "6"
                    },
                    "fpUsed": "4",
                    "description": "Swallow an enemy and spit them out at another enemy."
                },
                {
                    "name": "Mini-Egg",
                    "rank": "super",
                    "damage": {
                        "baseDamage": "0",
                        "superDamage": "3",
                        "ultraDamage": "4"
                    },
                    "fpUsed": "3",
                    "description": "Throw several eggs which can shrink enemies, each egg only does 1 damage."
                },
                {
                    "name": "Stampede",
                    "rank": "ultra",
                    "damage": {
                        "baseDamage": "0",
                        "superDamage": "0",
                        "ultraDamage": "6"
                    },
                    "fpUsed": "6",
                    "description": "Summon a Yoshi herd to attack the enemy, each yoshi only does 1 damage."
                }
            ],
            "image": "Yoshi.png",
            "description":"A freshly hatched Yoshi kid and Mario's biggest fan, his special ability lets Mario ride on his back to move quickly and hover jump over gaps.<br><br>In battle, Yoshi specializes in multi-hit attacks. Most of his attacks hit multiple times, but only deal one damage. This makes him suited for enemies with low defense. His Gulp attack can be used against enemies with higher defense."
        },
        {
            "party":4,
            "name": "Vivian",
            "hitpoints": {
                "baseHP": "15",
                "superHP": "20",
                "ultraHP": "30"
            },
            "defense": "0",

            "attacks": [
                {
                    "name": "Shade Fist",
                    "rank": "base",
                    "damage": {
                        "baseDamage": "3",
                        "superDamage": "4",
                        "ultraDamage": "5"
                    },
                    "fpUsed": "0",
                    "description": "A burning punch that can set enemies on fire."
                },
                {
                    "name": "Veil",
                    "rank": "base",
                    "damage": {
                        "baseDamage": "0",
                        "superDamage": "0",
                        "ultraDamage": "0"
                    },
                    "fpUsed": "1",
                    "description": "Hide Mario in the shadows to prevent him from being attacked."
                },
                {
                    "name": "Fiery Jinx",
                    "rank": "super",
                    "damage": {
                        "baseDamage": "0",
                        "superDamage": "5",
                        "ultraDamage": "5"
                    },
                    "fpUsed": "6",
                    "description": "Deals fire damage to all enemies causing burns, this attack ignores defense."
                },
                {
                    "name": "Infatuate",
                    "rank": "ultra",
                    "damage": {
                        "baseDamage": "0",
                        "superDamage": "0",
                        "ultraDamage": "0"
                    },
                    "fpUsed": "4",
                    "description": "Blow a kiss to confuse enemies."
                }
            ],
            "image": "Vivian.png",
            "description":"A former Shadow Siren who quit to join Mario, her special ability cloaks Mario in the shadows which hides him from enemies.<br><br>In battle, Vivian uses fire attacks which can cause enemies to burn for extra damage. Certain enemies will also take extra damage from fire. She also has the ability to hide Mario from enemy attacks and can confuse enemies."
        },
        {
            "party":5,
            "name": "Admiral Bobbery",
            "hitpoints": {
                "baseHP": "20",
                "superHP": "30",
                "ultraHP": "40"
            },
            "defense": "0",

            "attacks": [
                {
                    "name": "Bomb",
                    "rank": "base",
                    "damage": {
                        "baseDamage": "4",
                        "superDamage": "5",
                        "ultraDamage": "6"
                    },
                    "fpUsed": "0",
                    "description": "Attack a single enemy by exploding."
                },
                {
                    "name": "Bomb Squad",
                    "rank": "base",
                    "damage": {
                        "baseDamage": "3",
                        "superDamage": "3",
                        "ultraDamage": "3"
                    },
                    "fpUsed": "3",
                    "description": "Launch 3 bombs which explode after 1 turn."
                },
                {
                    "name": "Hold Fast",
                    "rank": "super",
                    "damage": {
                        "baseDamage": "0",
                        "superDamage": "0",
                        "ultraDamage": "0"
                    },
                    "fpUsed": "4",
                    "description": "A Counter attack which damages enemies that touch Admiral Bobbery."
                },
                {
                    "name": "Bob-ombast",
                    "rank": "ultra",
                    "damage": {
                        "baseDamage": "0",
                        "superDamage": "0",
                        "ultraDamage": "8"
                    },
                    "fpUsed": "9",
                    "description": "Attack all enemies with one giant explosion."
                }
            ],
            "image": "Bobbery.png",
            "description":"A Bob-omb Admiral, his special ability is to explode which lets Mario blow up enemies and barriers.<br><br>In battle, Bobbery has high attack power and the ability to attack all enemies at once. His attacks use a lot of Flower Points, but can turn the tide in a bad situation. He can also launch time bombs or counter an enemy's physical attacks."
        },
        {
            "party":6,
            "name": "Ms. Mowz",
            "hitpoints": {
                "baseHP": "15",
                "superHP": "20",
                "ultraHP": "25"
            },
            "defense": "0",

            "attacks": [
                {
                    "name": "Love Slap",
                    "rank": "base",
                    "damage": {
                        "baseDamage": "2",
                        "superDamage": "3",
                        "ultraDamage": "4"
                    },
                    "fpUsed": "0",
                    "description": "Repeatedly Slap an enemy, this attack ignores defenses."
                },
                {
                    "name": "Kiss Thief",
                    "rank": "base",
                    "damage": {
                        "baseDamage": "0",
                        "superDamage": "0",
                        "ultraDamage": "0"
                    },
                    "fpUsed": "2",
                    "description": "Steal an enemy's item or badge."
                },
                {
                    "name": "Tease",
                    "rank": "super",
                    "damage": {
                        "baseDamage": "0",
                        "superDamage": "0",
                        "ultraDamage": "0"
                    },
                    "fpUsed": "3",
                    "description": "An ability which has a chance to confuse all enemies."
                },
                {
                    "name": "Smooch",
                    "rank": "ultra",
                    "damage": {
                        "baseDamage": "0",
                        "superDamage": "0",
                        "ultraDamage": "0"
                    },
                    "fpUsed": "10",
                    "description": "A kiss which restores 10HP to Mario."
                }
            ],
            "image": "MsMouz.png",
            "description":"A Squeek thief who resembles the mysterious owner of the badge shop, her ability detects hidden blocks and items in the area.<br><br>In battle, Ms. Mowz has the ability to steal items from enemies. Her 'Love Slap' attack ignores the enemy's defense which allows her to deal consistent damage to any enemy. She also has the ability to heal Mario or confuse enemies."
        }
    ]