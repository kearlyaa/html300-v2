<template>
    <div>
        <h2>{{ title }}</h2>
        <img>{{ src }}
    </div>
</template>

<script>
    export default {
        name: 'Images',
        props: [
            'title', 'src'
        ],
    }
</script>