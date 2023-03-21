<template>
    <div class="main-content">
        <h1>About Us</h1>
        <!--v-for loop here-->
        <div class="accordion">
            <div class="accordion-item" v-for="(item, index) in items" :key="index">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse'+index" aria-expanded="true" aria-controls="collapseOne">
                    {{ item.title }}
                </button>
                </h2>
                <div :id="'collapse'+index" class="accordion-collapse collapse" aria-labelledby="headingOne">
                <div class="accordion-body">
                    {{ item.content }}
                </div>
                </div>
            </div>
        </div>
        <!--end v-for loop-->
    </div>
</template>

<script>
    export default {
        name: 'aboutPage', 
        data() {
            return {
                items: [
                    {
                        title: "Who created WA Adventures?",
                        content: "Emmett Schreiber",
                    },
                    {
                        title: "When was WA Adventures founded?",
                        content: "2023",
                    },
                    {
                        title: "What is the point of WA Adventures?",
                        content: "To encourage explorers and adventurers to see more of Washington state",
                    }
                ]
            }
        },
    };
</script>

<style scoped>
.accordion-item {
    margin: 1rem;
}
.accordion-body {
    padding: 1rem;
}
.accordion-button {
    padding: 1rem;
    font-weight: bold;
    height: 1;
    overflow: hidden;
    transition: 0.5s;
}
</style>