module.exports.config = {
    name: "loli",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "a",
    description: "a",
    commandCategory: "a",
    usages: "a",
    cooldowns: 5
};
module.exports.run = async function ({ api, event }) {
    const { threadID, messageID } = event
    const fs = require("fs")
    const axios = require("axios")
    const res = await axios.get(`http://api-adreno-loli.herokuapp.com/`)
    const { data } = await axios.get(res.data.url, { responseType: 'arraybuffer' })
    fs.writeFileSync(__dirname + '/cache/img.png', Buffer.from(data));
    return api.sendMessage({ attachment: fs.createReadStream(__dirname + '/cache/img.png') }, threadID, () => fs.unlinkSync(__dirname + '/cache/img.png'), messageID);
}
