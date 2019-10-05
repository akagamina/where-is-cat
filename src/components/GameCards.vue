<template>
  <div class="body-container">
    <div class="title-block">
      <h3>Where is Cat?</h3>
      <h4>After choose opened cards then click closed card</h4>
    </div>
    <div class="container">
      <cards
        @click.native="selectedItem = item.id"
        v-for="item in cards"
        :key="item.id"
        :item="item"
        :class="{'selected-item-shadow' : selectedItem === item.id}"
      ></cards>
    </div>

    <div class="container">
      <transition name="rotate" mode="out-in">
        <component @click.native="showCard(answer)" :is="activeCard" :item="answer"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import Cards from "./Cards";
import DefaultCard from "./DefaultCard";

export default {
  components: {
    Cards,
    DefaultCard
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          component: "cards",
          img: require("../assets/card-1.jpg")
        },
        {
          id: 2,
          component: "cards",
          img: require("../assets/card-2.jpg")
        },
        {
          id: 3,
          component: "cards",
          img: require("../assets/card-3.jpg")
        },
        {
          id: 4,
          component: "cards",
          img: require("../assets/card-4.jpg")
        },
        {
          id: 5,
          component: "cards",
          img: require("../assets/card-5.jpg")
        }
      ],
      selectedItem: null,
      answer: {},
      activeCard: "default-card"
    };
  },
  created() {
    let answer = Math.ceil(Math.random() * this.cards.length);
    this.answer = this.cards[answer - 1];
  },
  methods: {
    showCard(answer) {
      if (this.selectedItem === null) {
        alert("Before result you must choose Card!");
      } else {
        this.activeCard = answer.component;
        setTimeout(() => {
          if (answer.id === this.selectedItem) {
            this.$emit('changeComp', 'Congrats')
          } else {
           this.$emit('changeComp', 'Wrongs')
          }
        }, 2000);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.body-container {
  .title-block {
  }

  .container,
  .card-container {
    display: flex;
    justify-content: center;
    margin-bottom: 75px;
  }
}

.selected-item-shadow {
  box-shadow: 5px 5px 5px rgb(30, 27, 27) !important;
}

.rotate-enter-active {
  animation: rotate-in 0.5s ease-in-out forwards;
}

.rotate-leave-active {
  animation: rotate-out 0.5s ease-in-out forwards;
}

@keyframes rotate-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}

@keyframes rotate-iout {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}
</style>