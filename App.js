import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Keyboard } from 'react-native';

export default function App() {

  const [nome, setNome] = useState ('');
  const [telefone, setTelefone] = useState ('');
  const [contatos, setContatos] = useState ([]);
  const [id, setId] = useState (10);

  const capturaNome = (nome) => {
    setNome(nome)
  };

  const capturaTelefone = (telefone) => {
    setTelefone(telefone)
  };

  const adicionarContato = () => {
    Keyboard.dismiss();
    setContatos(contatos => {
      //console.log(contatos); para checar os ID's pelo terminal
      setId(id + 2);
      return [...contatos, {
        id: id.toString(),
        nome: nome,
        telefone: telefone
      }];
    });
  }

  return (
    <View style = {styles.container}>
      <View style = {styles.contato}>
        <TextInput
          placeholder = "Nome"
          style = {styles.contatoInputText}
          onChangeText = {capturaNome}
          value = {nome}
        />
        <TextInput
          placeholder = "Telefone"
          style = {styles.contatoInputText}
          onChangeText = {capturaTelefone}
          value = {telefone}
          keyboardType = {'number-pad'}
        />
        <Button
          title = "Add"
          onPress = {adicionarContato}
        />
      </View>
      <FlatList
        data = {contatos}
        renderItem = {
          contato => (
            // Mostra o ID (10) + nome + tel
            <View style = {styles.listaDeContatos}>
              <Text>{contato.item.id}</Text>
              <Text>{contato.item.nome}</Text>
              <Text>{contato.item.telefone}</Text>
            </View>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contato: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  contatoInputText: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2,
    marginBottom: 8
  },
  listaDeContatos: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  }
});