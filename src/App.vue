<template>
  <main class="overflow-hidden relative max-w-7xl mx-auto">
    <HeroBanner />
    <FullContainer>
      <template #title>
        <FullContainerTitle>
          Tu ne sais pas comment cuisiner ?
        </FullContainerTitle>
      </template>
      <template #content>
        <FullContainerText class="mt-3 lg:mt-14">
          Pas de panique, sur La Cuisine, tu trouveras des entrées, des plats,
          des desserts, des sauces et pleins d’autres choses sous forme de
          recettes simples.
        </FullContainerText>
        <div
          class="flex flex-col-reverse items-center lg:flex-row mt-3 lg:mt-14"
        >
          <FullContainerText class="text-center mt-6 lg:mt-0">
            Rien de mieux pour se mettre à la cuisine !
          </FullContainerText>
          <GraphicChef class="w-full h-auto mt-3 lg:mt-0" />
        </div>
      </template>
    </FullContainer>
    <FullContainer>
      <template #title>
        <FullContainerTitle>
          Tu ne sais pas quoi manger aujourd’hui ?
        </FullContainerTitle>
      </template>
      <template #content>
        <FullContainerText class="text-center">
          Alors La Cuisine est là pour toi ! Tu pourras utiliser l’une des
          nombreuses recettes pour ton prochain repas, pour inspirer ta
          prochaine envie culinaire !
        </FullContainerText>
        <GraphicNewIdea class="w-full" />
      </template>
    </FullContainer>
    <FullContainer>
      <template #title>
        <FullContainerTitle>
          Marre d’imprimer des recettes ou de la rechercher dans tes favoris ?
        </FullContainerTitle>
      </template>
      <template #content>
        <div class="flex flex-col lg:flex-row">
          <GraphicSearch class="w-full" />
          <FullContainerText class="mt-6 lg:mt-0 text-right max-w-lg">
            La Cuisine, c’est une grande base de données en ligne dans laquelle
            tu peux rechercher une recettre par son nom ou les filtrers en
            utilisant l’un des nombreux tags !
          </FullContainerText>
        </div>
      </template>
    </FullContainer>
    <FullContainer>
      <template #title>
        <FullContainerTitle>
          Besoin d’accorder sa liste de courses avec ses envies ?
        </FullContainerTitle>
      </template>
      <template #content>
        <FullContainerText> La Cuisine le permet ! </FullContainerText>
        <GraphicTodoList class="w-full" />
        <FullContainerText class="text-right">
          La Cuisine permet aussi de créer sa liste de courses en fonction des
          recettes que vous souhaitez faire ! Avec la visualisation des recettes
          par ingrédient, gérez votre liste de courses en quelques cliques !
        </FullContainerText>
      </template>
    </FullContainer>
    <FullContainer>
      <template #title>
        <FullContainerTitle>
          Besoin de changer des pâtes aux lardons ?
        </FullContainerTitle>
      </template>
      <template #content>
        <div class="flex flex-col-reverse lg:flex-row mt-6 lg:mt-14">
          <GraphicIdeation
            class="w-1/2 sm:w-3/4 lg:w-full h-auto mx-auto mt-6 lg:mt-0"
          />
          <FullContainerText class="lg:text-right">
            Dans La Cuisine, tu trouveras une grande variété de recettes qui te
            permettront de changer tes habitudes alimentaires !
          </FullContainerText>
        </div>
        <FullContainerText class="mt-6 lg:mt-14">
          La Cuisine, c’est aussi un lieu de partage des recettes. Si tu
          souhaites faire découvrir tes meilleures recettes au reste de la
          communauté, il te suffit de remplir Le Formulaire.
        </FullContainerText>
      </template>
    </FullContainer>
  </main>
  <Footer></Footer>
</template>

<script setup>
import HeroBanner from "./components/organisms/HeroBanner.vue";
import Footer from "./components/organisms/Footer.vue";
import FullContainer from "./components/atoms/FullContainer.vue";
import FullContainerTitle from "./components/atoms/FullContainerTitle.vue";
import FullContainerText from "./components/atoms/FullContainerText.vue";
import GraphicBlob from "./components/atoms/Graphics/GraphicBlob.vue";
import GraphicChef from "./components/atoms/Graphics/GraphicChef.vue";
import GraphicIdeation from "./components/atoms/Graphics/GraphicIdeation.vue";
import GraphicNewIdea from "./components/atoms/Graphics/GraphicNewIdea.vue";
import GraphicSearch from "./components/atoms/Graphics/GraphicSearch.vue";
import GraphicTodoList from "./components/atoms/Graphics/GraphicTodoList.vue";
</script>
