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
        <FullContainerText class="place-self-center lg:col-span-2">
          Pas de panique, sur La Cuisine, tu trouveras des entrées, des plats,
          des desserts, des sauces et pleins d’autres choses sous forme de
          recettes simples.
        </FullContainerText>
        <GraphicChef class="w-full h-auto place-self-center lg:order-last" />
        <FullContainerText class="text-center place-self-center">
          Rien de mieux pour se mettre à la cuisine !
        </FullContainerText>
      </template>
    </FullContainer>
    <FullContainer>
      <template #title>
        <FullContainerTitle>
          Tu ne sais pas quoi manger aujourd’hui ?
        </FullContainerTitle>
      </template>
      <template #content>
        <FullContainerText class="text-center place-self-center lg:col-span-2">
          Alors La Cuisine est là pour toi ! Tu pourras utiliser l’une des
          nombreuses recettes pour ton prochain repas, pour inspirer ta
          prochaine envie culinaire !
        </FullContainerText>
        <GraphicNewIdea
          class="w-full h-auto lg:h-[500px] place-self-center lg:col-span-2"
        />
      </template>
    </FullContainer>
    <FullContainer>
      <template #title>
        <FullContainerTitle>
          Marre d’imprimer des recettes ou de la rechercher dans tes favoris ?
        </FullContainerTitle>
      </template>
      <template #content>
        <GraphicSearch class="w-full h-auto place-self-center" />
        <FullContainerText
          class="text-right max-w-xl place-self-center lg:ml-12"
        >
          La Cuisine, c’est une grande base de données en ligne dans laquelle tu
          peux rechercher une recettre par son nom ou les filtrers en utilisant
          l’un des nombreux tags !
        </FullContainerText>
      </template>
    </FullContainer>
    <FullContainer>
      <template #title>
        <FullContainerTitle>
          Besoin d’accorder sa liste de courses avec ses envies ?
        </FullContainerTitle>
      </template>
      <template #content>
        <FullContainerText
          class="justify-self-start place-self-center lg:col-span-2"
        >
          La Cuisine le permet !
        </FullContainerText>
        <GraphicTodoList
          class="w-full h-auto lg:h-[354px] place-self-center lg:col-span-2"
        />
        <FullContainerText class="text-right place-self-center lg:col-span-2">
          La Cuisine permet aussi de créer sa liste de courses en fonction des
          recettes que vous souhaitez faire ! <br />
          Avec la visualisation des recettes par ingrédient, gérez votre liste
          de courses en quelques cliques !
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
        <FullContainerText
          class="
            lg:text-right
            place-self-center
            lg:order-2 lg:place-self-start lg:mt-12
          "
        >
          Dans La Cuisine, tu trouveras une grande variété de recettes qui te
          permettront de changer tes habitudes alimentaires !
        </FullContainerText>
        <GraphicIdeation
          class="
            w-1/2
            sm:w-3/4
            lg:w-[500px]
            h-auto
            mx-auto
            place-self-center
            lg:order-1 lg:place-self-start lg:mt-12
          "
        />
        <FullContainerText class="place-self-center lg:col-span-2 lg:order-3">
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
