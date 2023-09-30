<template>
  <div style="display: flex; justify-content: center">
    <div class="container" style="margin-top: 50px">
      <h1 class="form-title">Update Blog</h1>

      <form class="was-validated">
        <div class="main-user-info">
          <div class="user-input-box">
            <label for="fullName">Title<span style="color: red">*</span></label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter Full Name"
              v-model="Title"
              required
            />
            <h5 style="color: red">{{ error.Title }}</h5>
          </div>
          <div class="user-input-box">
            <label for="username">Slug<span style="color: red">*</span></label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
              v-model="Slug"
              required
            />
            <h5 style="color: red">{{ error.Slug }}</h5>
          </div>
          <div class="user-input-box">
            <label for="email">User<span style="color: red">*</span></label>
            <Multiselect
              style="margin-left: 0; width: 564px; border: 1px solid"
              v-model="User"
              :options="useroptions"
              placeholder="select opation"
              :closeOnSelect="true"
              :clearOnSelect="true"
              class="w-[11rem]"
            >
            </Multiselect>
            &nbsp;
            <!-- <input type="email" id="email" name="email" placeholder="Enter Email" @input="input3" v-model="Email" required /> -->
            <h5 style="color: red">{{ error.User }}</h5>
          </div>

          <div class="user-input-box">
            <label for="phoneNumber"
              >Tag<span style="color: red">*</span></label
            >
            <Multiselect
              style="margin-left: 22px; width: 564px; border: 1px solid"
              v-model="tag"
              object
              :options="tagoptions"
              placeholder="select opation"
              :closeOnSelect="true"
              :clearOnSelect="true"
              :searchable="true"
              mode="tags"
              :multiple="true"
              class="w-[11rem]"
            >
            </Multiselect
            >&nbsp;
            <!-- <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter Phone Number" @input="input4" v-model="PhoneNumber" required /> -->
            <h5 style="color: red">{{ error.tag }}</h5>
          </div>
          <div class="user-input-box">
            <label for="password"
              >Categories<span style="color: red">*</span></label
            >
            <Multiselect
              style="margin-left: 0; width: 564px; border: 1px solid"
              v-model="categore"
              :options="categoreoptions"
              placeholder="select opation"
              :closeOnSelect="true"
              :clearOnSelect="true"
              class="w-[11rem]"
            >
            </Multiselect>
            <!-- <input type="password" id="password" name="password" placeholder="Enter Password" @input="input5" v-model="Password" /> -->
            <h5 style="color: red">{{ error.categore }}</h5>
          </div>

          <div class="user-input-box">
            <label for="confirmPassword"
              >Date<span style="color: red">*</span></label
            >
            <!-- <input type="Date" id="confirmPassword" placeholder="Confirm Password" @input="input6" v-model="date" /> -->
            <VueDatePicker v-model="date" style="width: 569px"></VueDatePicker>
            <h5 style="color: red">{{ error.date }}</h5>
          </div>
          <div class="user-input-box">
            <label for="password"
              >Status<span style="color: red">*</span></label
            >

            <input
              type="text"
              id="password"
              name="password"
              placeholder="Enter Password"
              v-model="status"
            />
            <h5 style="color: red">{{ error.status }}</h5>
          </div>
          <div class="user-input-box">
            <label for="password">Image<span style="color: red">*</span></label>

            <input
              type="file"
              id="password"
              name="password"
              placeholder="Enter Password"
              @change="addImage"
            />
          </div>
          <div class="user-input-box" style="display: contents">
            <label for="Description"
              >Description<span class="star">*</span></label
            >
            <vue-editor
              id="editor"
              useCustomImageHandler
              @image-added="handleImageAdded"
              v-model="textarea"
              style="width: 100%"
            ></vue-editor>
            <h4 class="error">{{ error?.textarea }}</h4>
          </div>
        </div>

        <div class="form-submit-btn">
          <button class="btn btn-info" @click.prevent="storeblog">Update</button
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button class="btn btn-danger">Cancle</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { VueEditor } from "vue3-editor";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import Multiselect from "@vueform/multiselect";
import axios from "axios";
import { ref, onMounted, inject } from "vue";
import moment from "moment";
import { useRoute } from "vue-router";
const route = useRoute();
import { useRouter } from "vue-router";
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({
  /* options */
});
const swal = inject("$swal");

const router = useRouter();
const User = ref([]);
const tag = ref([]);
const categore = ref([]);
const useroptions = ref([]);
const tagoptions = ref("");
const categoreoptions = ref("");
const Slug = ref("");
const Title = ref("");
const error = ref({});
const date = ref("");
const textarea = ref("");
const status = ref("");
// const files = ref('')
// const url = ref('')

const getblog = () => {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  let token = user.token;

  // console.log(route);
  axios
    .get(
      `https://blog-api-dev.octalinfotech.com/api/blogs/${route.params.id}/show`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      Slug.value = res.data.data.slug;
      textarea.value = res.data.data.description;
      Title.value = res.data.data.title;
      date.value = res.data.data.date;
      status.value = res.data.data.status;
      User.value = res.data.data.user_id;
      categore.value = res.data.data.category_id;
      tag.value = res.data.data.tag.map((tag) => {
        return { label: tag.name, value: tag.id };
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
const getTags = () => {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  let token = user.token;
  axios
    .get("https://blog-api-dev.octalinfotech.com/api/tages/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
      tagoptions.value = data.data.map((value) => {
        return {
          label: value.name,
          value: value.id,
        };
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
const getusers = () => {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  let token = user.token;
  axios
    .get("https://blog-api-dev.octalinfotech.com/api/users/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
      console.log(data);
      useroptions.value = [
        { label: "admin", value: "1" },
        { label: "kuldip", value: "2" },
      ];
    })
    .catch((err) => {
      console.log(err);
    });
};
const getcategory = () => {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  let token = user.token;
  axios
    .get("https://blog-api-dev.octalinfotech.com/api/categories/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
      categoreoptions.value = data.data.map((value) => {
        return {
          label: value.name,
          value: value.id,
        };
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const storeblog = () => {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  let token = user.token;

  date.value = moment(date.value).format("YYYY-MM-DD");
  console.log(tag.value);
  let data = {
    category_id: categore.value,
    user_id: User.value,
    title: Title.value,
    description: textarea.value,
    date: date.value,
    status: status.value,
    tag_ids: tag.value.map((value) => {
      return value.value;
    }),
  };

  axios
    .post(
      `https://blog-api-dev.octalinfotech.com/api/blogs/${route.params.id}/update`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      console.log(res);
      swal.fire("blog update successfully!", "", "success");
      toaster.show(res.data.message, {
        type: "success",
        position: "top-right",
      });
    })
    .catch((error) => {
      console.log(error);
    });
  router.push({ name: "Blog" });
};

onMounted(() => {
  getblog();
  getusers();
  getTags();
  getcategory();
});
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped>
.container {
  width: 100%;
  max-width: 65%;
  background-color: rgb(0, 37, 85);
  background-image: linear-gradient(rgb(212, 223, 255), rgb(255, 226, 250));
  padding: 28px;
  margin: 0 28px;
  border-radius: 10px;
  box-shadow: inset 0px 0px 5px slategray;
  background-repeat: no-repeat;
}

.form-title {
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  padding-bottom: 6px;
  color: rgb(0, 0, 0);
  text-shadow: 1.5px 1.5px 1.5px black;
  border-bottom: solid 1px white;
  display: flex;
}

.main-user-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0;
}

.user-input-box:nth-child(2n) {
  justify-content: end;
}

.user-input-box {
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  padding-bottom: 15px;
}

.user-input-box label {
  display: flex;
  width: 95%;
  color: rgb(0, 0, 0);
  font-size: 20px;
  font-weight: 400;
  margin: 5px 0;
}

.user-input-box input {
  height: 40px;
  width: 95%;
  border-radius: 7px;
  outline: none;
  border: 1px solid rgb(0, 204, 255);
  padding: 0 10px;
}

.gender-title {
  color: white;
  font-size: 24px;
  font-weight: 600;
  border-bottom: 1px solid white;
}

.gender-category {
  margin: 15px 0;
  color: white;
}

.gender-category label {
  padding: 0 20px 0 5px;
}

.gender-category label,
.gender-category input,
.form-submit-btn input {
  cursor: pointer;
}

.form-submit-btn {
  display: flex;
  justify-content: end;
  margin-top: 40px;
}

.form-submit-btn input {
  display: block;
  width: 100%;
  margin-top: 10px;
  font-size: 20px;
  padding: 10px;
  border: none;
  border-radius: 3px;
  color: rgb(209, 209, 209);
  background: rgba(63, 114, 76, 0.7);
}

.form-submit-btn input:hover {
  background: rgba(56, 204, 93, 0.7);
  color: rgb(255, 255, 255);
}

.select {
  background-color: rgb(121, 247, 247);
  border: none;
  border-radius: 5px;
  padding: 0 1em 0 0;
  margin: 0;
  width: 50%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  height: 15%;

  z-index: 1;
}

@media (max-width: 600px) {
  .container {
    min-width: 280px;
  }

  .user-input-box {
    margin-bottom: 12px;
    width: 100%;
  }

  .user-input-box:nth-child(2n) {
    justify-content: space-between;
  }

  .gender-category {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .main-user-info {
    max-height: 380px;
    overflow: auto;
  }

  .main-user-info::-webkit-scrollbar {
    width: 0;
  }
}
</style>
