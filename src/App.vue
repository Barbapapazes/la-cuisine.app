<template>
  <section class="w-full h-screen flex flex-col justify-evenly">
    <div class="max-w-screen-xl mx-auto">
      <h1
        class="bg-clip-text bg-gradient-to-br from-secondary to-primary text-6xl font-bold md:text-[9rem] text-transparent"
      >
        La Cuisine
      </h1>
      <h2 class="text-gray-500 text-xl md:text-4xl text-center mt-8">
        Le livre de recettes <br />
        numérique à porté de main
      </h2>
      <div
        class="flex flex-col-reverse items-center md:flex-row justify-evenly max-w-lg mx-auto mt-48 md:mt-64"
      >
        <a
          href="https://bit.ly/la-cuisine-bienvenue"
          class="text-lg md:text-2xl py-2 px-4 mt-8 md:mt-0 md:py-3 md:px-6 rounded-lg border border-primary text-primary"
          >Le Concept</a
        >
        <a
          href="https://bit.ly/la-cuisine-livre"
          class="text-lg md:text-2xl rounded-lg py-2 px-4 md:py-3 md:px-6 bg-primary text-white shadow-lg"
          >Le Livre</a
        >
      </div>
    </div>
  </section>
  <div class="flex flex-col space-y-16 md:space-y-32">
    <section
      class="px-4 max-w-screen-xl mx-auto md:grid md:grid-cols-6 md:gap-16 md:relative md:pb-40"
    >
      <SectionTitle class="md:col-span-6"> Plus de 40 recettes </SectionTitle>
      <SectionText class="md:col-span-3">
        Dans le livre de La Cuisine, tu trouveras tout ce qu'il te convient du
        premier repas de la journée au dernier, du repas simple et rapide à un
        repas plus complexe pour les grandes occasions !
      </SectionText>
      <SectionImg v-slot="{ attrs }">
        <img
          class="my-16 md:my-0 md:col-span-4 md:col-start-2"
          src="./assets/recipes-list.png"
          alt="Image de présentation de la liste des recettes"
          v-bind="attrs"
        />
      </SectionImg>
      <div
        class="flex justify-center md:absolute md:-z-10 md:bottom-10 md:right-0"
      >
        <GraphicChef class="md:h-72 md:w-auto"></GraphicChef>
      </div>
    </section>
    <section
      class="relative max-w-screen-xl mx-auto overflow-hidden md:overflow-visible"
    >
      <div
        class="absolute -z-10 top-3/4 left-3/4 bg-primary/25 w-44 h-44 rounded-full blur-[60px]"
      ></div>
      <div class="px-4 md:grid md:grid-cols-2 md:gap-16">
        <SectionTitle class="md:col-start-2">
          Des fiches détaillées
        </SectionTitle>
        <SectionText class="mt-8 md:mt-0 md:row-start-2 md:col-start-2">
          La Cuisine, ce n'est pas juste une liste de recettes.
          <br /><br />
          C'est aussi des fiches détaillées contenant les ingrédients, leurs
          quantités et la recette détaillées pour te permettre de réaliser.
          <br /><br />
          Aussi, tu pourras avoir une idée de la difficulté de la recette.
          <br /><br />
          Plus d'excuses pour ne pas faire la cuisine.
        </SectionText>
        <SectionImg v-slot="{ attrs }">
          <img
            class="my-16 md:my-0 md:col-start-1 md:row-start-1 md:row-span-4 md:col-span-1 md:sticky md:top-4"
            src="./assets/recipe.png"
            alt="Image de présentation d'une recette"
            v-bind="attrs"
          />
        </SectionImg>
        <SectionText class="md:col-start-2">
          Et comme le projet est communautaire, tu peux proposer des recettes ou
          des améliorations pour rendre meilleure La Cuisine.
        </SectionText>
        <div
          class="flex flex-row justify-center mt-8 md:mt-0 md:col-start-2 place-self-center"
        >
          <a
            href="https://bit.ly/la-cuisine-form"
            target="_blank"
            class="inline-block py-2 px-3 bg-primary text-white text-lg rounded-lg"
            >Le Formulaire</a
          >
        </div>
      </div>
    </section>
    <section
      class="px-4 max-w-screen-xl mx-auto md:grid md:grid-cols-2 md:gap-16"
    >
      <SectionTitle>Des filtres et une recherche performante</SectionTitle>
      <SectionImg v-slot="{ attrs }">
        <img
          class="my-16 md:my-0 md:row-span-2"
          src="./assets/filters.png"
          alt="Image des filtres de la cuisine"
          v-bind="attrs"
        />
      </SectionImg>
      <SectionText>
        De bonnes recettes, des recettes pour tout le monde mais surtout un
        puissant moteur de recherche basé sur le nom, le contenu et le type de
        la recette !
      </SectionText>
      <SectionText class="mt-8 md:mt-0">
        Avec son système de tri flexible, il ne vous a jamais été aussi simple
        de trouver la bonne recette au meilleur moment de la journée.
      </SectionText>
      <GraphicSearch
        class="hidden lg:block place-self-end relative -z-10 bottom-20 -right-1/3"
      />
    </section>
    <section class="px-4 max-w-screen-xl mx-auto grid grid-cols-2 md:gap-16">
      <SectionTitle>
        La liste de courses au plus proche de vos envie
      </SectionTitle>
      <SectionText class="col-span-2 md:col-span-1 md:col-start-1 mt-8 md:mt-0">
        La Cuisine te permet de faire le lien entre les recettes et ta liste de
        courses aux travers des ingrédients. <br />
        <br />
        Avec cet ingénieux système, tu t'assures de ne rien oublier au magasin
        pour préparer tes plats préférés.
      </SectionText>
      <SectionImg v-slot="{ attrs }">
        <img
          class="col-span-2 md:col-span-1 md:row-span-2 md:col-start-2 my-16 md:my-0"
          src="./assets/shopping-list.png"
          alt="Image de la liste de courses de La Cuisine"
          v-bind="attrs"
        />
      </SectionImg>
      <GraphicTodo
        class="md:h-72 md:w-auto md:place-self-end md:relative md:bottom-32 md:-right-20"
      />
      <SectionText class="md:col-start-1 md:row-start-3">
        Toujours prêt pour une cuisine parfaite !
      </SectionText>
    </section>
  </div>
  <Footer></Footer>
</template>

<script setup>
import GraphicTodo from "./components/atoms/Graphics/GraphicTodo.vue"
import GraphicSearch from "./components/atoms/Graphics/GraphicSearch.vue"
import GraphicChef from "./components/atoms/Graphics/GraphicChef.vue"
import SectionTitle from "./components/atoms/SectionTitle.vue"
import SectionText from "./components/atoms/SectionText.vue"
import SectionImg from "./components/atoms/SectionImg.vue"
import Footer from "./components/organisms/Footer.vue"

import { onMounted } from "vue"

if (process.env.NODE_ENV === "production") {
  onMounted(() => {
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.innerHTML =
      '(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);    })(window, document, "clarity", "script", "7qe8xg43r7");'
    document.head.appendChild(script)
  })
}
</script>
