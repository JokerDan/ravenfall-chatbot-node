// Reference:
// https://github.com/zerratar/RavenBot/blob/master/src/RavenBot.Core.Ravenfall/Commands/TrainCommandProcessor.cs

const skills = ["all", "atk", "def", "str", "magic", "ranged", "woodcutting", "fishing", "cooking", "mining", "crafting", "farming"];
const tasks = ["Woodcutting", "Fishing", "Mining", "Crafting", "Cooking", "Farming", "Fighting"];

export default function(ctx) {
    if (ctx.args[0] == undefined || !skills.includes(ctx.args[0])) {
        return;
    }

    let task;
    const choice = ctx.args[0].trim();
    const fSkill = isFightingSkill(choice);
    const wSkill = isWorkingSkill(choice);

    if (fSkill != -1) {
        task = new Task(ctx.player, tasks[tasks.indexOf("Fighting")], choice);
    } else if (wSkill != -1) {
        task = new Task(ctx.player, tasks[wSkill], choice);
    } else {
        console.error(`Can't train skill: ${ctx.player.Username} - ${choice}`);
        return;
    }

    ctx.dispatchEvent('task', JSON.stringify(task));
    // ctx.twitchClient.say(ctx.channel, `${ctx.userstate['display-name']} is now training ${choice}!`);
}

class Task {
    constructor(player, task, args) {
        this.Player = player;
        this.Task = task.toString();
        this.Arguments = new Array().concat(args);
    }
}

function isFightingSkill(val) {
    if (val.startsWith("atk") || val.startsWith("att")) return 0;
    if (val.startsWith("def")) return 1;
    if (val.startsWith("str")) return 2;
    if (val.startsWith("all")) return 3;
    if (val.startsWith("magic")) return 4;
    if (val.startsWith("ranged")) return 5;
    return -1;
}

function isWorkingSkill(val) {
    if (val.startsWith("wood") || val.startsWith("chop") || val.startsWith("wdc") || val.startsWith("chomp")) return tasks.indexOf("Woodcutting");
    if (val.startsWith("fish") || val.startsWith("fsh") || val.startsWith("fist")) return tasks.indexOf("Fishing");
    if (val.startsWith("cook") || val.startsWith("ckn")) return tasks.indexOf("Cooking");
    if (val.startsWith("craft")) return tasks.indexOf("Crafting");
    if (val.startsWith("mine") || val.startsWith("min") || val.startsWith("mining")) return tasks.indexOf("Mining");
    if (val.startsWith("farm") || val.startsWith("fm")) return tasks.indexOf("Farming");
    return -1;
}
