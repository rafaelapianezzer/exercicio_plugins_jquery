$(document).ready(function () {

    $('#telefone').mask('(00) 00000-0000', {
        placeholder:'(00) 00000-0000'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder:'000.000.000-00'
    });

    $('#cep').mask('00000-000', {
        placeholder:'00000-000'
    });
 

});

    $('form').validate({
        rules: {
            nome: {
                required: true 
            },
            email: {
                required: true,
                email: true
            }, 
            cpf: {
                required: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true,
            },
            cep: {
                required:false,
            }
        },
            messages: {
                nome: 'Por favor, insira seu nome completo'
            },
            submitHandler: function(form) {
                alert('Cadastro realizado com sucesso!');
                form.reset();
            },
            invalidHandler: function(evento, validador) {
                let camposIncorretos = validador.numberOfInvalids();
                if (camposIncorretos) {
                    alert(`Existem ${camposIncorretos} campos incorretos.`)
                }
            }
    })

