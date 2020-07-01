<template>
  <div class="container">
    <img class="wave" src="../assets/wave.svg" />
    <div class="img">
      <img src="../assets/login.svg" />
    </div>
    <div class="welcome-content">
      <form action="index.html">
        <img class="welcome" src="../assets/welcome.svg" />
        <h2 class="title">Welcome to DigitalGuest!</h2>
        <button @click="logout" class="btn">Sign Out</button>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "logout",
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("./login");
        });
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  overflow: hidden;
}

.title {
  font-family: "Poppins", sans-serif;
  position: relative;
  margin-bottom: 50px;
}

.welcome {
  width: 100px;
  position: relative;
  bottom: 10px;
}

.wave {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100%;
  z-index: -1;
}

.container {
  width: 85vw;
  height: 85vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 18rem;
  padding: 0 2rem;
}

.img {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.welcome-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}

.img img {
  width: 500px;
}

form {
  width: 360px;
}

.welcome-content img {
  height: 100px;
}

.welcome-content .input-div {
  position: relative;
  display: grid;
  grid-template-columns: 7% 93%;
  margin: 25px 0;
  padding: 5px 0;
  border-bottom: 2px solid #d9d9d9;
}

.btn {
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  outline: none;
  border: none;
  background-image: linear-gradient(to right, #4ec2ba, #84d4cf, #4ec2ba);
  background-size: 200%;
  font-size: 1.2rem;
  color: #fff;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  margin: 1rem 0;
  cursor: pointer;
  transition: 0.5s;
}
.btn:hover {
  background-position: right;
}

@media screen and (max-width: 1050px) {
  .container {
    grid-gap: 5rem;
  }
}

@media screen and (max-width: 1000px) {
  form {
    width: 290px;
  }

  .img img {
    width: 400px;
  }
}

@media screen and (max-width: 900px) {
  .container {
    grid-template-columns: 1fr;
    margin-top: 110 px;
    width: 100%;
    height: 100%;
    display: inline-block;
  }

  .img {
    display: none;
  }

  .wave {
    display: none;
  }

  .welcome-content {
    justify-content: center;
    margin-top: 115px;
  }
}

@media screen and (max-width: 600px) {
  .welcome-content {
    justify-content: center;
  }
}
</style>