<template>
<div id="home-i">
    <div class="container">
        <b-container class="bv-example-row">
            <b-row>
                <div class="mb-1">
                    <b-col sm="12"><b-button @click="showMsgBoxTwo">Enviar solicitação</b-button></b-col>
                </div>
            </b-row>
        </b-container>
    </div>
</div>
</template>

<script>
export default {
    name: "SolicitacaoModal",
    data() {
        return {
            boxTwo: ''
        }
    },
    methods: {
        showMsgBoxTwo() {
            this.boxTwo = ''
            this.$bvModal.msgBoxConfirm('Você quer enviar uma solicitação?', {
                title: 'Por favor confirme',
                size: 'sm',
                buttonSize: 'sm',
                okVariant: 'success',
                okTitle: 'SIM',
                cancelTitle: 'NÃO',
                footerClass: 'p-2',
            })
            .then(value => {
                this.boxTwo = value
            })
            .catch(err => {
                console.log("Texto de erro", err);
            })
        }
    }
}
</script>

<style scoped>
.btn-secondary:focus, .btn-secondary:read-only{
    background-color: #6a5ca1;
    /* outline: none !important; */
    box-shadow: none !important;
}
.btn-secondary:hover{
    background-color: #8351dc;
}
</style>