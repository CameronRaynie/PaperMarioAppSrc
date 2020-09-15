
const bigListOfBadges =
   [
      {
         "number": 0,
         "name": "All or Nothing",
         "type": "Buff",
         "equipCost": "4",
         "fpUsed": "0",
         "description": "Perfect action commands give +1 damage, miss the action command and the attack does nothing.",
         "image": "Allornothing.gif"
      },
      {
         "number":1,
         "name": "Attack FX B",
         "type": "Other",
         "equipCost": "0",
         "fpUsed": "0",
         "description": "Change attack sfx to a mouse squeak.",
         "image": "Attackfxb.gif"
      },
      {
         "number":2,
         "name": "Attack FX G",
         "type": "Other",
         "equipCost": "0",
         "fpUsed": "0",
         "description": "Change attack sfx to a giggle.",
         "image": "Attackfxg.gif"
      },
      {
         "number":3,
         "name": "Attack FX P",
         "type": "Other",
         "equipCost": "0",
         "fpUsed": "0",
         "description": "Change attack sfx to Bowser's roar.",
         "image": "Attackfxp.gif"
      },
      {
         "number":4,
         "name": "Attack FX R",
         "type": "Other",
         "equipCost": "0",
         "fpUsed": "0",
         "description": "Change attack sfx to crickets chirping.",
         "image": "Attackfxr.gif"
      },
      {
         "number":5,
         "name": "Attack FX Y",
         "type": "Other",
         "equipCost": "0",
         "fpUsed": "0",
         "description": "Change attack sfx to a bell.",
         "image": "Attackfxy.gif"
      },
      {
         "number":6,
         "name": "Bump Attack",
         "type": "Other",
         "equipCost": "5",
         "fpUsed": "0",
         "description": "Defeat weak enemies by bumping into them.",
         "image": "Bumpattack.gif"
      },
      {
         "number":7,
         "name": "Charge",
         "type": "Buff",
         "equipCost": "1",
         "fpUsed": "1",
         "description": "Allows use of Charge command, which raises next attack by +2 damage.",
         "image": "Charge.gif"
      },
      {
         "number":8,
         "name": "Charge P",
         "type": "Partner",
         "equipCost": "1",
         "fpUsed": "1",
         "description": "Allows parter to use Charge command, which raises next attack by +2 damage.",
         "image": "Chargep.gif"
      },
      {
         "number":9,
         "name": "Chill Out",
         "type": "Other",
         "equipCost": "1",
         "fpUsed": "0",
         "description": "Prevents enemies from making First Strikes.",
         "image": "Chillout.gif"
      },
      {
         "number":10,
         "name": "Close Call",
         "type": "Buff",
         "equipCost": "1",
         "fpUsed": "0",
         "description": "When Mario is in Danger (>=5 HP) enemy attacks sometimes miss.",
         "image": "Closecall.gif"
      },
      {
         "number":11,
         "name": "Close Call P",
         "type": "Partner",
         "equipCost": "1",
         "fpUsed": "0",
         "description": "When Partner is in Danger (>=5 HP) enemy attacks sometimes miss.",
         "image": "Closecallp.gif"
      },
      {
         "number":12,
         "name": "Damage Dodge",
         "type": "Buff",
         "equipCost": "2",
         "fpUsed": "0",
         "description": "Mario's guard action command reduces damage by another 1 point.",
         "image": "Damagedodge.gif"
      },
      {
         "number":13,
         "name": "Damage Dodge P",
         "type": "Partner",
         "equipCost": "2",
         "fpUsed": "0",
         "description": "Partner's guard action command reduces damage by another 1 point.",
         "image": "Damagedodgep.gif"
      },
      {
         "number":14,
         "name": "Defend Plus",
         "type": "Buff",
         "equipCost": "5",
         "fpUsed": "0",
         "description": "Increases Mario's natural defense by 1",
         "image": "Defendplus.gif"
      },
      {
         "number":15,
         "name": "Defend Plus P",
         "type": "Partner",
         "equipCost": "5",
         "fpUsed": "0",
         "description": "Increase Partner's natural defense by 1",
         "image": "Defendplusp.gif"
      },
      {
         "number":16,
         "name": "Double Dip",
         "type": "Buff",
         "equipCost": "3",
         "fpUsed": "4",
         "description": "Allows use of two items per turn. Two copies allow Triple Dip for 8 FP.",
         "image": "Doubledip.gif"
      },
      {
         "number":17,
         "name": "Double Dip P",
         "type": "Partner",
         "equipCost": "3",
         "fpUsed": "4",
         "description": "Allows parter to use two items per turn.",
         "image": "Doubledipp.gif"
      },
      {
         "number":18,
         "name": "Double Pain",
         "type": "Other",
         "equipCost": "0",
         "fpUsed": "0",
         "description": "Mario takes double damage.",
         "image": "DoublePain.gif"
      },
      {
         "number":19,
         "name": "Feeling Fine",
         "type": "Buff",
         "equipCost": "4",
         "fpUsed": "0",
         "description": "Protects Mario from most status effects.",
         "image": "Feelingfine.gif"
      },
      {
         "number":20,
         "name": "Feeling Fine P",
         "type": "Partner",
         "equipCost": "4",
         "fpUsed": "0",
         "description": "Protects Partner from most status effects.",
         "image": "Feelingfinep.gif"
      },
      {
         "number":21,
         "name": "Fire Drive",
         "type": "Hammer",
         "equipCost": "3",
         "fpUsed": "5",
         "description": "Hammer attack that burns all ground based enemies.",
         "image": "Firedrive.gif"
      },
      {
         "number":22,
         "name": "First Attack",
         "type": "Other",
         "equipCost": "1",
         "fpUsed": "0",
         "description": "Defeat weak enemies by hitting them with a First Strike.",
         "image": "Firstattack.gif"
      },
      {
         "number":23,
         "name": "Flower Finder",
         "type": "Other",
         "equipCost": "3",
         "fpUsed": "0",
         "description": "Increase chance that Flower points will drop after battle.",
         "image": "Flowerfinder.gif"
      },
      {
         "number":24,
         "name": "Flower Saver",
         "type": "Buff",
         "equipCost": "4",
         "fpUsed": "0",
         "description": "Reduce cost of Mario's attacks by 1 FP (to a minimum of 1)",
         "image": "Flowersaver.gif"
      },
      {
         "number":25,
         "name": "Flower Saver P",
         "type": "Partner",
         "equipCost": "4",
         "fpUsed": "0",
         "description": "Reduce cost of Partner's attacks by 1 FP (to a minimum of 1)",
         "image": "Flowersaverp.gif"
      },
      {
         "number":26,
         "name": "FP Drain",
         "type": "Buff",
         "equipCost": "1",
         "fpUsed": "0",
         "description": "Reduce Mario's attack power by 1, but gain FP every time he hits an enemy",
         "image": "Fpdrain.gif"
      },
      {
         "number":27,
         "name": "FP Plus",
         "type": "Buff",
         "equipCost": "3",
         "fpUsed": "0",
         "description": "Increase Maximum FP by 5",
         "image": "Fpplus.gif"
      },
      {
         "number":28,
         "name": "Hammer Throw",
         "type": "Hammer",
         "equipCost": "1",
         "fpUsed": "2",
         "description": "Throw Hammer at any enemy, this attack ignores enemy positioning.",
         "image": "Hammerthrow.gif"
      },
      {
         "number":29,
         "name": "Hammerman",
         "type": "Buff",
         "equipCost": "2",
         "fpUsed": "0",
         "description": "Boost Hammer attacks by +1 but disable Jump attacks.",
         "image": "Hammerman.gif"
      },
      {
         "number":30,
         "name": "Happy Flower",
         "type": "Buff",
         "equipCost": "2",
         "fpUsed": "0",
         "description": "Slowly Regenerate FP while in battle.",
         "image": "Happyflower.gif"
      },
      {
         "number":31,
         "name": "Happy Heart",
         "type": "Buff",
         "equipCost": "2",
         "fpUsed": "0",
         "description": "Mario's HP slowly regenerates in battle.",
         "image": "Happyheart.gif"
      },
      {
         "number":32,
         "name": "Happy Heart P",
         "type": "Partner",
         "equipCost": "2",
         "fpUsed": "0",
         "description": "Partner's HP slowly regenerates in battle.",
         "image": "Happyheartp.gif"
      },
      {
         "number":33,
         "name": "Head Rattle",
         "type": "Hammer",
         "equipCost": "1",
         "fpUsed": "2",
         "description": "Hammer attack with a chance to confuse enemies.",
         "image": "Headrattle.gif"
      },
      {
         "number":34,
         "name": "Heart Finder",
         "type": "Other",
         "equipCost": "3",
         "fpUsed": "0",
         "description": "Increase chance that HP hearts will drop after a battle.",
         "image": "Heartfinder.gif"
      },
      {
         "number":35,
         "name": "HP Drain",
         "type": "Buff",
         "equipCost": "1",
         "fpUsed": "0",
         "description": "Reduce Mario's attack power by 1, but gain 1 HP every time he hits an enemy.",
         "image": "Hpdrain.gif"
      },
      {
         "number":36,
         "name": "HP Drain P",
         "type": "Partner",
         "equipCost": "1",
         "fpUsed": "0",
         "description": "Reduce Partner's attack power by 1, but gain 1 HP every time they hit an enemy.",
         "image": "Hpdrainp.gif"
      },
      {
         "number":37,
         "name": "HP Plus",
         "type": "Buff",
         "equipCost": "3",
         "fpUsed": "0",
         "description": "Boosts Mario's Max HP by 5.",
         "image": "Hpplus.gif"
      },
      {
         "number":38,
         "name": "HP Plus P",
         "type": "Partner",
         "equipCost": "6",
         "fpUsed": "0",
         "description": "Boost Partner's Max HP by 5.",
         "image": "Hpplusp.gif"
      },
      {
         "number":39,
         "name": "Ice Power",
         "type": "Buff",
         "equipCost": "1",
         "fpUsed": "0",
         "description": "Boosts attack and defense by 1 against fire enemies and allows them to be safely Jumped on.",
         "image": "Icepower.gif"
      },
      {
         "number":40,
         "name": "Ice Smash",
         "type": "Hammer",
         "equipCost": "1",
         "fpUsed": "3",
         "description": "Hammer attack with a chance to freeze targets.",
         "image": "Icesmash.gif"
      },
      {
         "number":41,
         "name": "Item Hog",
         "type": "Other",
         "equipCost": "3",
         "fpUsed": "0",
         "description": "Increases chance of finding items after battle, also boosts chance of stealing items.",
         "image": "Itemhog.gif"
      },
      {
         "number":42,
         "name": "Jumpman",
         "type": "Buff",
         "equipCost": "2",
         "fpUsed": "0",
         "description": "Boosts Jump attacks by +1 but disables Hammer attacks.",
         "image": "Jumpman.gif"
      },
      {
         "number":43,
         "name": "L Emblem",
         "type": "Other",
         "equipCost": "0",
         "fpUsed": "0",
         "description": "Change Mario's clothes into Luigi's Clothes.",
         "image": "Lemblem.gif"
      },
      {
         "number":44,
         "name": "Last Stand",
         "type": "Buff",
         "equipCost": "1",
         "fpUsed": "0",
         "description": "When Mario is in Danger (>=5 HP) he recieves half damage.",
         "image": "Laststand.gif"
      },
      {
         "number":45,
         "name": "Last Stand P",
         "type": "Partner",
         "equipCost": "1",
         "fpUsed": "0",
         "description": "When Partner is in Danger (>=5 HP) they recieve half damage.",
         "image": "Laststandp.gif"
      },
      {
         "number":46,
         "name": "Lucky Day",
         "type": "Buff",
         "equipCost": "7",
         "fpUsed": "0",
         "description": "Cause enemy attacks to sometimes miss.",
         "image": "Luckyday.gif"
      },
      {
         "number":47,
         "name": "Lucky Start",
         "type": "Buff",
         "equipCost": "4",
         "fpUsed": "0",
         "description": "Random beneficial status at start of battle.",
         "image": "Luckystart.gif"
      },
      {
         "number":48,
         "name": "Mega Rush",
         "type": "Buff",
         "equipCost": "1",
         "fpUsed": "0",
         "description": "When Mario is in Peril (1 HP) attack is raised by +5.",
         "image": "Megarush.gif"
      },
      {
         "number":49,
         "name": "Mega Rush P",
         "type": "Partner",
         "equipCost": "1",
         "fpUsed": "0",
         "description": "When Partner is in Peril (1 HP) attack is raised by +5.",
         "image": "Megarushp.gif"
      },
      {
         "number":50,
         "name": "Money Money",
         "type": "Other",
         "equipCost": "5",
         "fpUsed": "0",
         "description": "Cause sigificantly more coins to drop after a battle.",
         "image": "Moneymoney.gif"
      },
      {
         "number":51,
         "name": "Multibounce",
         "type": "Jump",
         "equipCost": "1",
         "fpUsed": "2",
         "description": "Jump attack that bounces across every enemy.",
         "image": "Multibounce.gif"
      },
      {
         "number":52,
         "name": "P-Down, D-Up",
         "type": "Buff",
         "equipCost": "2",
         "fpUsed": "0",
         "description": "Reduce Mario's Attack power by 1, but raise Defense by 1.",
         "image": "Pdowndup.gif"
      },
      {
         "number":53,
         "name": "P-Down, D-Up P",
         "type": "Partner",
         "equipCost": "2",
         "fpUsed": "0",
         "description": "Reduce Partner's Attack power by 1, but raise Defense by 1.",
         "image": "Pdowndupp.gif"
      },
      {
         "number":54,
         "name": "P-Up, D-Down",
         "type": "Buff",
         "equipCost": "2",
         "fpUsed": "0",
         "description": "Raise Mario's Attack power by 1, but lowers defense by 1.",
         "image": "Pupddown.gif"
      },
      {
         "number":55,
         "name": "P-Up, D-Down P",
         "type": "Partner",
         "equipCost": "2",
         "fpUsed": "0",
         "description": "Raise Partner's Attack power by 1, but lowers defense by 1.",
         "image": "Pupddownp.gif"
      },
      {
         "number":56,
         "name": "Peekaboo",
         "type": "Buff",
         "equipCost": "2",
         "fpUsed": "0",
         "description": "Reveal enemy lifebars.",
         "image": "Peekaboo.gif"
      },
      {
         "number":57,
         "name": "Piercing Blow",
         "type": "Hammer",
         "equipCost": "1",
         "fpUsed": "2",
         "description": "Hammer attack that ignores enemy defense.",
         "image": "Piercingblow.gif"
      },
      {
         "number":58,
         "name": "Pity Flower",
         "type": "Buff",
         "equipCost": "3",
         "fpUsed": "0",
         "description": "Sometimes gain 1 FP when taking damage.",
         "image": "Pityflower.gif"
      },
      {
         "number":59,
         "name": "Power Bounce",
         "type": "Jump",
         "equipCost": "3",
         "fpUsed": "3",
         "description": "Jump attack that continues to damage one enemy until an action command is missed.",
         "image": "Powerbounce.gif"
      },
      {
         "number":60,
         "name": "Power Jump",
         "type": "Jump",
         "equipCost": "1",
         "fpUsed": "2",
         "description": "Jump attack with a lot of power behind it.",
         "image": "Powerjump.gif"
      },
      {
         "number":61,
         "name": "Power Plus",
         "type": "Buff",
         "equipCost": "6",
         "fpUsed": "0",
         "description": "Increase Mario's Attack power by 1.",
         "image": "Powerplus.gif"
      },
      {
         "number":62,
         "name": "Power Plus P",
         "type": "Partner",
         "equipCost": "6",
         "fpUsed": "0",
         "description": "Increase Partner's Attack power by 1.",
         "image": "Powerplusp.gif"
      },
      {
         "number":63,
         "name": "Power Rush",
         "type": "Buff",
         "equipCost": "1",
         "fpUsed": "0",
         "description": "When Mario is in Danger (>=5 HP) attack power goes up by 2.",
         "image": "Powerrush.gif"
      },
      {
         "number":64,
         "name": "Power Rush P",
         "type": "Partner",
         "equipCost": "1",
         "fpUsed": "0",
         "description": "When Partner is in Danger (>=5 HP) attack power does up by 2.",
         "image": "Powerrushp.gif"
      },
      {
         "number":65,
         "name": "Power Smash",
         "type": "Hammer",
         "equipCost": "1",
         "fpUsed": "2",
         "description": "Hammer attack with a lot of power behind it.",
         "image": "Powersmash.gif"
      },
      {
         "number":66,
         "name": "Pretty Lucky",
         "type": "Buff",
         "equipCost": "2",
         "fpUsed": "0",
         "description": "Enemies will occasionally miss Mario.",
         "image": "Prettylucky.gif"
      },
      {
         "number":67,
         "name": "Pretty Lucky P",
         "type": "Partner",
         "equipCost": "2",
         "fpUsed": "0",
         "description": "Enemies will occasionally miss your Partner.",
         "image": "Prettyluckyp.gif"
      },
      {
         "number":68,
         "name": "Quake Hammer",
         "type": "Hammer",
         "equipCost": "2",
         "fpUsed": "3",
         "description": "Hammer attack that hits all gounded and ceiling based enemies.",
         "image": "Quakehammer.gif"
      },
      {
         "number":69,
         "name": "Quick Change",
         "type": "Buff",
         "equipCost": "7",
         "fpUsed": "0",
         "description": "Allows Mario to change parters without using a turn.",
         "image": "Quickchange.gif"
      },
      {
         "number":70,
         "name": "Refund",
         "type": "Buff",
         "equipCost": "1",
         "fpUsed": "0",
         "description": "Refunds some coins when an item is used in battle.",
         "image": "Refund.gif"
      },
      {
         "number":71,
         "name": "Return Postage",
         "type": "Buff",
         "equipCost": "7",
         "fpUsed": "0",
         "description": "Causes enemy melee attacks on Mario to return 1/2 damage to the attacker.",
         "image": "Returnpostage.gif"
      },
      {
         "number":72,
         "name": "Shrink Stomp",
         "type": "Jump",
         "equipCost": "1",
         "fpUsed": "2",
         "description": "Jump attack with a chance to shrink enemies, reducing their attack power.",
         "image": "Shrinkstomp.gif"
      },
      {
         "number":73,
         "name": "Simplifier",
         "type": "Buff",
         "equipCost": "1",
         "fpUsed": "0",
         "description": "Makes action commands easier, earns less Star Power",
         "image": "Simplifier.gif"
      },
      {
         "number":74,
         "name": "Sleepy Stomp",
         "type": "Jump",
         "equipCost": "1",
         "fpUsed": "2",
         "description": "Jump attack with a chance to put enemies to sleep.",
         "image": "Sleepystomp.gif"
      },
      {
         "number":75,
         "name": "Slow Go",
         "type": "Other",
         "equipCost": "0",
         "fpUsed": "0",
         "description": "Prevents Mario from running outside of combat.",
         "image": "Slowgo.gif"
      },
      {
         "number":76,
         "name": "Soft Stomp",
         "type": "Jump",
         "equipCost": "1",
         "fpUsed": "2",
         "description": "Jump attack with a chance to soften enemies, reducing their defense.",
         "image": "Softstomp.gif"
      },
      {
         "number":77,
         "name": "Spike Shield",
         "type": "Buff",
         "equipCost": "3",
         "fpUsed": "0",
         "description": "Allows Mario to jump on Spiked enemies.",
         "image": "Spikeshield.gif"
      },
      {
         "number":78,
         "name": "Super Appeal",
         "type": "Buff",
         "equipCost": "1",
         "fpUsed": "0",
         "description": "Gain more Star Power when Mario Appeals.",
         "image": "Superappeal.gif"
      },
      {
         "number":79,
         "name": "Super Appeal P",
         "type": "Partner",
         "equipCost": "1",
         "fpUsed": "0",
         "description": "Gain more Star Power when Partner Appeals.",
         "image": "Superappealp.gif"
      },
      {
         "number":80,
         "name": "Timing Tutor",
         "type": "Buff",
         "equipCost": "1",
         "fpUsed": "0",
         "description": "Show the timing for Stylish Commands.",
         "image": "Timingtutor.gif"
      },
      {
         "number":81,
         "name": "Tornado Jump",
         "type": "Jump",
         "equipCost": "2",
         "fpUsed": "3",
         "description": "Jump attack that hits all midair enemies.",
         "image": "Tornadojump.gif"
      },
      {
         "number":82,
         "name": "Unsimplifier",
         "type": "Buff",
         "equipCost": "1",
         "fpUsed": "0",
         "description": "Makes action commands more difficult, earns more Star Power.",
         "image": "Unsimplifier.gif"
      },
      {
         "number":83,
         "name": "W Emblem",
         "type": "Other",
         "equipCost": "0",
         "fpUsed": "0",
         "description": "Change Mario's clothes into Wario's clothes.",
         "image": "Wemblem.gif"
      },
      {
         "number":84,
         "name": "Zap Tap",
         "type": "Buff",
         "equipCost": "3",
         "fpUsed": "0",
         "description": "Electrifies Mario causing enemies who come into contact to take 1 damage from electricity.",
         "image": "Zaptap.gif"
      }
   ]