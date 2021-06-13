  
const Discord = require('discord.js');
const client = new Discord.Client();
const   text_channel: ("707709630192550052"); 
 const   your_server: ("590116292715872256"); 
client.on('ready', () => {
    console.log('I am ready!');
});



client.on("message", async message => {
    if (message.guild.id != your_server) return;
    if (
      message.author.id == "335645388323160064" && // تعديل مهم ايدي بوت الترحيب
      message.content.includes("-") ///  تعديل مهم رسالة الترحيب
    ) {
      setTimeout(() => {
        message.channel.send("**𝐖𝐄𝐋𝐂𝐎𝐌𝐄**"); /// تعديل مهم رسالة الترحيب
      }, time[Math.floor(Math.random() * time.length)]);
    }
  });

  client.on("ready", () => {
    console.log(client.user.tag + " is ready!");
    client.guilds
      .get(your_server)
      .channels.get(voice_channel)
      .join();
  });

});


// THIS  MUST  BE  THIS  WAY
client.login("ODUxNDAwOTM2NzU2NjA5MDc0.YL3wRw.EiegTtFrAdZOFIgxFc9iM83byrU")
client.login("ODUxNDAzODU5Mzc2MDc4ODY5.YL3yZw.0gYF_pWnRMNIQ-wUgF8TVYTyTlg")
client.login("ODUxNDA0OTY3OTg5ODcwNjIy.YL3zUQ.9LHqIfvl-PpOhrqPYYrOI0n4Rmg")
client.login("ODUxNDA2MTkyMjAyMDg4NDY5.YL30uw.Do-xefnIbqywCPwkuMA0_KL6MlA")
client.login("ODUxNDA4MzAxNTUxNjQ4NzY4.YL32sA.xDg7EghK-ydn05CL905NqfUd7v4")
client.login("ODUwODI1OTU1ODk1Mjc5Njc4.YLvYDw.63KEbwZkl6aCFCMusyXqmM9gYwI")
client.login("ODUwODI3NDc5NTMwOTk1NzUz.YLvaGg.rRxQwmkg1K2BcDrlNgNjgxay-Xs")
client.login("ODUwODI5MDQ4MTY5ODg5ODc1.YLva5g.aXCpi6oQ0BS548yRUP23b2Ixk2U")
client.login("ODUwODIzOTEyNTMwMjQ3Njkx.YLvW-g.rJtLuJaL_h8dLmU6jObD_pnfapg")
client.login("ODUwNzg1MjA3NjE0NTcwNTI2.YLvSwQ.98PF85EtDLXZzCZro88nb0rdWFo")
client.login("ODUwODIxODA1NTM5MzI4MDcw.YLvUUQ.R3fQ4Vc6cTUhhZO45Y0CwKXG210")
client.login("ODUwODIxMTU2NTUzNDkwNDM0.YLvTbQ.PnxDav4Xc-9PJh6DfL-JYfKofMU")
client.login("ODUwNzQ5NzE5MTM0NDcwMTU2.YLuQ7w.wlC6XHaJkJgCye4L6ptfM1Ra8yQ")
client.login("ODUwNzQ4OTA5NTA4NDkzMzQz.YLuQNw.KxedQxA3_FiZ6ZqdhOFRWiX3CE4")
client.login("ODUwNzUwNTcwODg1NDE0OTQz.YLuRwg.6YDzIEzhAw0QCipVXTscrTUsN-c")
client.login("ODUwNzUwNTcwODg1NDE0OTQz.YLuRwg.6YDzIEzhAw0QCipVXTscrTUsN-c")
client.login("ODUwNzUxMzEwNTU5MTgyODY4.YLuSgw.8nPAktt7KFwm5w0EC8luF35wE0Y")
client.login("ODUwNzc4Mjc4MzM0OTU1NTMy.YLuriw.cmPW_A8EVP3HIUf09TO17FjOl-4")
client.login("ODUwODIyODE5ODIxNjQ5OTIw.YLvVXg.EUTre60hcL3Yl1VedyAZiRxK-tU")
client.login("ODUwODIxMTU2NTUzNDkwNDM0.YLvTbQ.PnxDav4Xc-9PJh6DfL-JYfKofMU")
client.login("ODUwNzM0ODE4MTIzNzEwNTA0.YLuDOg.S2_twYSp8gZtrZhGVcxk6qq9o4A")
client.login("ODUwNzM1NjcwNjk4NzA0OTQ2.YLuEfg.RDVC7KnWOP5aDUrpeRkIReHDcbk")
client.login("ODUwNzMyNjg4NzMzMjQxMzU1.YLuBiA.RFmd0RIQ8aXPRY8A9GhYBirFclY")
client.login("ODUwNzMzOTE5NjE1MTg5MDI0.YLuCVQ.ZJEVybG1U6akfomBSrivMuc6Muo")
client.login("ODUwNzMxMzA5NzA4ODY5Njcy.YLt_9A.GyIq9-ejE0-QDcW8siAO1KQkwys")
client.login("ODUwNzMwMDg2MTg1MDQxOTYy.YLt-_A.Ke1G-DP2q2KjMC8Wf97uOnmMtDs")
client.login("ODUwNzIxMTQwODc5MzkyNzk4.YLt3fg.vF1oJEzQbr1VOB-TpCDmKNSNy4Y")





















