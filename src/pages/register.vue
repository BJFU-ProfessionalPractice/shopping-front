<template>
  <div class="register">
    <div class="wrapper">
      <div class="logo">
        <img src="../assets/img/navfooter/logo-mi.png" />
      </div>
      <h4 class="title">注册账号</h4>
      <div>
        <form>
          <p>
            <input type="text" placeholder="邮箱/手机号码/小米ID" v-model="username" />
          </p>
          <p>
            <input type="password" placeholder="密码" v-model="password" />
          </p>
          <span class="login-btn" @click="login">登录</span>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "register"
};
</script>

<style lang="scss" >
.register {
  min-height: 100%;
  background: #f9f9f9;
  position: relative;
  .wrapper {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    width: 850px;
    height: 565px;
    .logo {
      height: 50px;
      text-align: center;
      img {
        width: 50px;
        height: 50px;
      }
    }
    .title {
      text-align: center;
      font-size: 30px;
      color: #333;
      padding: 46px 0 42px;
    }
  }
}
.login {
  header {
    height: 112px;
    .container {
      width: 1226px;
      margin: 0 auto;
      .brand {
        height: 112px;
        display: flex;
        align-items: center;
        text-decoration: none;
        .logo {
          width: 53px;
          height: 53px;
          margin-right: 18px;
          border-radius: 2px;
        }
        h1 {
          font-size: 33px;
          color: #333;
          margin-bottom: 8px;
          margin-top: 0;
        }
        p {
          font-size: 10px;
          color: #666;
        }
      }
    }
  }
  main {
    height: 576px;
    background: url(../assets/img/login/bg-login.jpg) no-repeat;
    background-position: top center;
    .container {
      position: relative;
      width: 1226px;
      margin: 0 auto;
      .login-form {
        position: absolute;
        right: 0;
        top: 37px;
        box-sizing: border-box;
        width: 410px;
        height: 510px;
        background-color: #fff;
        padding: 40px 31px 0;
        .switch {
          display: flex;
          justify-content: space-between;
          margin-bottom: 49px;
          em {
            cursor: pointer;
            font-size: 22px;
            color: #333;
            &:nth-of-type(1) {
              margin-left: 42px;
            }
            &:nth-of-type(2) {
              margin-right: 42px;
            }
            &.isActive {
              color: #f60;
            }
            &:hover {
              color: #f60;
            }
          }
          span {
            color: #d7d7d7;
          }
        }
        .acount-login-body {
          form {
            p {
              height: 50px;
              border: 1px solid #e5e5e5;
              line-height: 50px;
              padding: 0 20px;
              input {
                width: 100%;
                height: 42px;
                border: none;
                outline: none;
                color: #999;
                font-size: 14px;
              }
              &:nth-child(1) {
                margin-bottom: 20px;
              }
              &:nth-child(2) {
                margin-bottom: 30px;
              }
            }
            .login-btn {
              display: inline-block;
              width: 100%;
              text-align: center;
              height: 50px;
              font-size: 16px;
              color: #fff;
              background-color: #ff6700;
              line-height: 50px;
              cursor: pointer;
              transition: all .4s;
              &:hover {
                background-color: #f25807;
                border-color: #f25807;
                color: #fff;
              }
            }
          }
          .other-way {
            display: flex;
            justify-content: space-between;
            margin-top: 14px;
            font-size: 14px;
            color: #999;
            .split {
              padding: 0 4px;
            }
            a {
              font-size: 14px;
              color: #999;
              text-decoration: none;
            }
          }
        }
        .QR-code {
          width: 349px;
          height: 306px;
          img {
            width: 100%;
            height: 100%;
            margin-top: 20px;
          }
        }
      }
    }
  }
  footer {
    text-align: center;
    padding: 100px 0 53px;
    .about {
      color: #757575;
      a {
        &.is-selected {
          color: #333;
        }
        transition: color 0.4s;
        font-size: 14px;
        color: #757575;
        text-decoration: none;
        padding: 0 8px;
        &:hover {
          color: #333;
        }
      }
    }
    .copyright {
      font-size: 14px;
      color: #757575;
      padding: 20px 0;
    }
  }
}
</style>