module.exports.run = (bot, message, args) => {

const amount = parseInt(args[0])
        if(message.member.hasPermission("MANAGE_CHANNELS"))
        if(isNaN(amount)) return message.channel.send("It doesn't seem to be valid number")
        if(args[0] === amount + "s") {
        message.channel.setRateLimitPerUser(amount)
        if(amount > 1) {
        message.channel.send("slowmode is now `" + amount + "` seconds")
        return
        }
        else {message.channel.send("slowmode is now `" + amount + "` second")
        return }
    } if(args[0] === amount + "min") {
        message.channel.setRateLimitPerUser(amount * 60)
        if(amount > 1) {
        message.channel.send("slowmode is now `" + amount + "` minutes")
        return
        } else { 
            message.channel.send("slowmode is now `" + amount + " minute")   
             
    
    return }
    } if(args[0] === amount + "h") {
        message.channel.setRateLimitPerUser(amount * 60 * 60)
        if(amount > 1) {
        message.channel.send("slowmode is now `" + amount + "` hours")
        return
        } else {
            message.channel.send("slowmode is now " + amount + " hour")
        return}
    } else {
        message.channel.send("You can only set seconds(s), minutes(min) and hours(h)")
    }
    
}

    module.exports.help = {
        name: "slowmode",
        aliases: ["slow"],
        description: "",
        usage: "",
        category: "moderation",
    };