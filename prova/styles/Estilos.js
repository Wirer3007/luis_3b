import { StyleSheet } from "react-native";

export default StyleSheet.create({

  telaI: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cecece',
    },
   area: {
    width: '100%',
    height: 1000,
    backgroundColor: '#ac7373',
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 10,
    position: 'relative',
  },
  

  bolinha: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'blue',
    position: 'absolute',
  },

  telaPlay:{

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8d1d1',
        marginTop: -70,
        width: 0

  },

   plaY: {
    width: 200,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
    backgroundColor: '#00c3ff',
    elevation: 30,
    shadowColor: '#000',
    shadowOpacity: 4,
    shadowRadius: 3
  },
  
  playT: {
    fontSize: 30,
    color: '#ffffff',
  },

  Titulo:{
    fontSize: 50,
    color: '#921010',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tituloP:{
    marginTop: 40,
    marginBorder: 0,
  },
  tituloF: {
    marginTop: 30,
},

TituloF: {
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#d30707',
},

listaFases: {
    marginTop: 25,
    width: '90%',
    flex: 1,
    borderWidth: 3,
    borderColor: '#0e0004',
    borderRadius: 15,
    overflow: 'hidden',
},

level: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00d3e2',
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
},

textoFase: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
},

levelBloqueado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a0a0a0',
    borderBottomWidth: 2,
    borderBottomColor: '#555',
},

textoBloqueado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#555',
},

previewCor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},

bolinhaCor: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#555',
},

listaCores: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 50,
},

botaoCor: {
    width: 55,
    height: 55,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#555',
},
botaoVoltar: {
    position: 'absolute',
    top: 15,
    left: 15,
    width: 90,
    height: 45,
    borderRadius: 10,
    backgroundColor: '#ff8585',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000000',
    zIndex: 10,
},

textoVoltar: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
},
obstaculoS: {
    backgroundColor: '#e300f8',
}

})