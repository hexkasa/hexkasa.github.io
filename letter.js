let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click', function () {
    card.setAttribute("style", "opacity:0");
    let x = document.createElement("audio");
    x.setAttribute("src", "qlx.mp3");
    x.setAttribute("autoplay", "autoplay");

    // 打字效果
    let i = 0
    let str = '亲爱的小胡,写下这些字句的时候，我想让你知道，在我心里，有一种情感就像五月天的歌曲一样，深深扎根，温柔而深刻。每当我聆听五月天的旋律，心中不禁浮现出你甜美的微笑。那笑容如同五月的阳光，温暖了我生命的每一个角落。每一句歌词仿佛是我对你的表白，每一个音符都是我对你深深的思念。在这个瞬息万变的世界里，我发现自己越来越想与你分享五月天的歌曲所带来的感动。那些歌词，那些旋律，仿佛诉说着我们之间的故事。就像歌中唱到的：“从不曾见过的梦，是我想要的未来”，我希望未来的每一个梦都能与你一同实现。五月天的音乐中蕴含着对生活的热爱和对爱情的执着，这让我想起了我们共同的点点滴滴。你总是那么积极，用乐观的态度面对生活的一切。这种坚韧的品质，让我深深着迷，也让我愿意与你一同走过生命中的每一个阶段。或许，我们曾经经历过各种风雨，但正如五月天的歌曲所诉说的：“遇到挫折要怎么面对，微笑着面对”，我愿意与你一同微笑着面对生活的起伏，共同创造属于我们的美好。在这封情书里，我想告诉你，我愿意用心守护我们之间的感情，愿意用一生的时间去等待。五月天的音乐让我更加深刻地感受到爱情的美好，也让我更加坚定要与你一同构筑属于我们的幸福。希望你能感受到这封情书中蕴含的真挚情感，也愿我们的爱情故事能够如同五月天的歌曲一样，充满浪漫和温馨，奏响属于我们的幸福旋律。——小苏'
    let strp = ''

    function print() {
        if (str[i] == '<') {
            document.getElementById("box").innerHTML = strp + "<br><br>+'|'";
            strp += "<br><br>";
        }
        else {
            strp += str[i];
            box.innerHTML = strp + '|';
        }
        i++;
    }
    setTimeout(() => {
        let printid = setInterval(() => {
            print();
            if (i == str.length)
                clearInterval(printid);
        }, 140);  // 190毫秒打一个字，其实细心发现的话，这个项目还是有个小小的bug，无法用语言描述这个bug，如果你想优化的话 有一种简单的方法就是调快打字的速度，这样那个bug看起来就不会很明显,我太菜了 不会改那个bug
    }, 5500);  //5500毫秒开始打字
    // 背景出现
    function appearBackground() {
        setTimeout(() => {
            box.style.opacity = 1
        }, 1500)
    }
    appearBackground()

})