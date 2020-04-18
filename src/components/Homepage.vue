
<template>
    <v-parallax class="landing-background" height="910">
        <div class="container">
            <div class="title-container">
                <h1>Hi, <span class="text">I'm Nick.</span></h1>
            </div>
            <div class="type-container">
                <h1>I'm a
                <span class="text">{{ typeValue }}</span>
                <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
                </h1>
            </div>
        </div>
        <div class="icon-container" align="center">
            <v-btn
            icon
            class="icon-left"
            href="https://www.linkedin.com/in/nicholas-roy-b1078a19a/"
            target="_blank"
            >
                <v-icon
                size="40"
                color="white"
                >
                mdi-linkedin
                </v-icon>
            </v-btn>
            <v-btn
            icon
            class="icon-right"
            href="https://github.com/NicholasRoy96"
            target="_blank"
            >
                <v-icon
                color="white"
                size="40"
                >
                mdi-github
                </v-icon>
            </v-btn>
        </div>
        <div class="view-work-container">
            <a v-scroll-to="'#frontend'">
              <h2 class="view-work">View my work</h2>
            </a>
            <a v-scroll-to="'#frontend'">
                <v-icon
                color="white"
                x-large
                >
                mdi-chevron-down
                </v-icon>
            </a>
        </div>
    </v-parallax>
  
</template>

<script>
import { setTimeout } from 'timers';
    
export default {
    name: 'Homepage',
    data: () => {
      return {
        typeValue: '',
        typeStatus: false,
        typeArray: ['fullstack developer.', 'problem solver.', 'lifelong student.'],
        typingSpeed: 100,
        erasingSpeed: 100,
        newTextDelay: 800,
        typeArrayIndex: 0,
        charIndex: 0
      }
    },
    methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;

          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;

          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;

          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;

          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
  }
</script>

<style lang="scss" scoped>
.landing-background {
    background-color: #455a64;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23455a64' stroke-width='.5' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='rotate(8 1000 750) scale(50) translate(-980 -735)'%3E%3Cuse fill='%23495d67' href='%23s' y='2'/%3E%3Cuse fill='%23495d67' href='%23s' x='1' y='2'/%3E%3Cuse fill='%234c616a' href='%23s' x='2' y='2'/%3E%3Cuse fill='%234c616a' href='%23s'/%3E%3Cuse fill='%2350646d' href='%23s' x='2'/%3E%3Cuse fill='%2350646d' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='rotate(8 1000 750) scale(50) translate(-980 -735)'%3E%3Cg fill='%23546770'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='rotate(8 1000 750) scale(50) translate(-980 -735)'%3E%3Cg fill='%23546770'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='rotate(8 1000 750) scale(50) translate(-980 -735)'%3E%3Cg fill='%23586b74'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='rotate(8 1000 750) scale(50) translate(-980 -735)'%3E%3Cg fill='%23455a64'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%235b6e77'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='rotate(8 1000 750) scale(50) translate(-980 -735)'%3E%3Cg fill='%233c6a7f'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='rotate(8 1000 750) scale(50) translate(-980 -735)'%3E%3Cg fill='%233c6a7f'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='rotate(8 1000 750) scale(50) translate(-980 -735)'%3E%3Cg fill='%233c6a7f'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
}

.container {
    width: 100%;
    justify-content: center;
    align-items: center;
    font-family: raleway, sans-serif;
}

.title-container {
    font-size: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
}

.type-container {
    font-size: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon-container {
    margin-top: 30px;
}

.icon-left {
    margin-right: 20px;
}

.icon-right {
    margin-left: 20px;
}

.view-work-container {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 50px;
    text-align: center;
}
.view-work {
    color: white !important;
}
h1 {
font-weight: normal;

    span.text {
        color: #a5dde8;
    }

    span.cursor {
        display: inline-block;
        margin-left: 3px;
        width: 4px;
        background-color: #fff;
        animation: cursorBlink 1s infinite;
    }

    span.cursor.typing {
        animation: none;
    }
}

@keyframes cursorBlink {
    49% { background-color: #fff; }
    50% { background-color: transparent; }
    99% { background-color: transparent; }
}

/* MEDIA QUERIES */

/* SM */
@media (max-width: 960px) {
    .title-container {
        font-size: 2.3em;
    }
    .type-container {
        font-size: 1.5em;
    }
}

/* XS */
@media (max-width: 600px) {
    .title-container {
        font-size: 1.5em;
    }
    .type-container {
        font-size: 0.875em;
    }
}
</style>