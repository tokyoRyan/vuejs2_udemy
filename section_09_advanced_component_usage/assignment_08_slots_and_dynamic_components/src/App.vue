<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <br>
                <button class="btn btn-primary" @click="activeTemplate = 'app-blue'">Load Blue Template</button>
                <button class="btn btn-success" @click="activeTemplate = 'app-green'">Load Green Template</button>
                <button class="btn btn-danger" @click="activeTemplate = 'app-red'">Load Red Template</button>
                <hr>

                <component :is="activeTemplate">
                    <h4>Lorem ipsum</h4>
                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </component>

                <!-- <app-blue v-if="activeTemplate === 'blue'">
                    <h4>Lorem ipsum</h4>
                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </app-blue>
                <app-green  v-if="activeTemplate === 'green'">
                    <p>Here is a quote from WWF's website:</p>
                    <blockquote cite="http://www.worldwildlife.org/who/index.html">
                        For 50 years, WWF has been protecting the future of nature.
                        The world's leading conservation organization,
                        WWF works in 100 countries and is supported by
                        1.2 million members in the United States and
                        close to 5 million globally.
                    </blockquote>
                </app-green>
                <app-red  v-if="activeTemplate === 'red'">
                    <audio controls>
                        <source src="vincent.mp3" type="audio/mpeg"/>
                        <source src="vincent.ogg" type="audio/ogg"/>
                    </audio>
                </app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function(){
            return {
                activeTemplate: ''
            };
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
