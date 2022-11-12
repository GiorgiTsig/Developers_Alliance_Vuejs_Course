<template>
    <div class="content">
      <active-user
        :Name = 'contact.Name'
        :Age = 'contact.Age' >
      </active-user>
    <user-data @add-contact="addContact" ></user-data>
    </div>
</template>

<script>
export default {
  data() {
    return {
      contact:
        {
          Name: '',
          Age: '',
        }
    };
  },

  methods: {
    addContact(name, age) {
      const newcontact = {
        Name:name,
        Age:age
      };
      this.contact.Name = newcontact.Name;
      this.contact.Age = newcontact.Age;
    },
  }
}
</script>



<style>

* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

#app form, #app ul{
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  text-align: center;
  width: 37%;
  max-width: 36rem;
  background-color: darkgreen;
  padding: 7%;
  margin: 50px;
}

#app form div {
  margin: 1rem 0;
}

#app form div label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
  margin-bottom: 12px;
}

#app form div button {
  font: inherit;
  cursor: pointer;
  background-color: black;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgb(0 0 0 / 26%);
}

</style>
