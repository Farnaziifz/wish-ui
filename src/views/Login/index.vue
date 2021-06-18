<template>
  <div class="login-component">
    <div class="login-form">
        <h2>Welcom to happyWish Land</h2>
        <input type="text" placeholder="user_name">
        <input type="text" placeholder="password">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-component {
  background-color: rgb(89, 191, 238);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form {
    width: 500px;
    height: 600px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
        text-align: center;
        text-shadow: 0px 0px 2px #000;
    }
  }
}
</style>