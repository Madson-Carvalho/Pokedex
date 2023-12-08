const getSecondariesColors = (primaryColor) => {
    const colors = {
        "black": {
            //Cor do degadrê da borda
            borderColor: '#4C4E4F',
            //Cores do degradê do meio
            pokeColor: {
                //Cor principal (de cima)
                mainColor: '#414B4F',
                //Cor secundária (de baixo)
                secondaryColor: '#7D8081'
            },
            sectionColor: '#212021'
        },
        "blue": {
            borderColor: '#01CEFF',
            pokeColor: {
                mainColor: '#4DC8F0',
                secondaryColor: '#ADD8E6'
            },
            sectionColor: '#262D5A'
        },
        "brown": {
            borderColor: '#B3711B',
            pokeColor: {
                mainColor: '#D2B48C',
                secondaryColor: '#FFDBAB'
            },
            sectionColor: '#6F3332'
        },
        "gray": {
            borderColor: '#D8D0C8',
            pokeColor: {
                mainColor: '#D3D3D3',
                secondaryColor: '#F2F2F2'
            },
            sectionColor: '#3F3F3F'
        },
        "green": {
            borderColor: '#64E36E',
            pokeColor: {
                mainColor: '#71FF71',
                secondaryColor: '#D5FFD5'
            },
            sectionColor: '#5FAF65'
        },
        "pink": {
            borderColor: '#FF7D8D',
            pokeColor: {
                mainColor: '#FFD1DC',
                secondaryColor: '#F0D3DA'
            },
            sectionColor: '#C62472'
        },
        "purple": {
            borderColor: '#D878D3',
            pokeColor: {
                mainColor: '#E794E0',
                secondaryColor: '#DEB0DA'
            },
            sectionColor: '#573760'
        },
        "red": {
            borderColor: '#FF5656',
            pokeColor: {
                mainColor: '#F92C51',
                secondaryColor: '#FF8DA2'
            },
            sectionColor: '#971414'
        },
        "white": {
            borderColor: '#C4C4C4',
            pokeColor: {
                mainColor: '#F5F5F5',
                secondaryColor: '#DADADA'
            },
            sectionColor: '#ADADAE'
        },
        "yellow": {
            borderColor: '#FFFC5B',
            pokeColor: {
                mainColor: '#F8F89B',
                secondaryColor: '#EBEBA1'
            },
            sectionColor: '#9D921A'
        },
    }

    return colors[`${primaryColor}`];
}

export default getSecondariesColors;