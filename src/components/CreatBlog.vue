<template>
  <div style="display: flex; justify-content: center">
    <div class="container" style="margin-top: 50px">
      <h1 class="form-title">New Blog</h1>

      <form class="was-validated">
        <div class="main-user-info">
          <div class="user-input-box">
            <label for="fullName">Title<span style="color: red">*</span></label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter Full Name"
              @input="slugifytitle"
              v-model="Title"
              required
            />
            <h5 class="Error">{{ errors.title }}</h5>
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
            <h5 class="Error">{{ errors.slug }}</h5>
          </div>
          <div class="user-input-box">
            <label for="email">User<span style="color: red">*</span></label>
            <Multiselect
              style="margin-left: 0; width: 564px;"
              v-model="User"
              :options="useroptions"
              placeholder="select opation"
              :closeOnSelect="true"
              :clearOnSelect="true"
              class="w-[11rem]"
            >
            </Multiselect>
            &nbsp;
            <h5 class="Error">{{ errors.user_id }}</h5>
          </div>

          <div class="user-input-box">
            <label for="phoneNumber">Tag<span style="color: red">*</span></label>
            <Multiselect
              style="margin-left: 22px; width: 564px; "
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
            <h5 class="Error">{{ errors.tag_id }}</h5>
          </div>
          <div class="user-input-box">
            <label for="password">Categories<span style="color: red">*</span></label>
            <Multiselect
              v-model="categore"
              :options="categoreoptions"
              placeholder="select opation"
              :closeOnSelect="true"
              :clearOnSelect="true"
              class="w-[11rem]"
            >
            </Multiselect>
            <h5 class="Error">{{ errors.category_id }}</h5>
          </div>
          <div class="user-input-box">
            <label for="confirmPassword"
              >Date<span style="color: red">*</span></label
            >
            <VueDatePicker v-model="date" style="width: 569px"></VueDatePicker>
            <h5 class="Error">{{ errors.date }}</h5>
          </div>
          <div class="user-input-box">
            <label for="password">Status<span style="color: red">*</span></label>
            <input
              type="text"
              id="password"
              name="password"
              v-model="status"
            />
            <h5 class="Error">{{ errors.status }}</h5>
          </div>
          <div class="user-input-box">
            <label for="password">Image<span style="color: red">*</span></label>

            <input
              type="file"
           
              @change="addImage"
            />
          </div>
          <div class="user-input-box" style="display: contents">
            <label for="Description"
              >Description<span class="star">*</span></label>
            <vue-editor id="editor" useCustomImageHandler @image-added="handleImageAdded" v-model="textarea"  style="width: 100%;"></vue-editor>
            <h4 class="error" >{{error?.textarea }}</h4>
          </div>
                
            </div>

        <div class="form-submit-btn">
          <button class="btn btn-info" @click.prevent="creatblog">Save</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
import { ref, onMounted,inject } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import moment from "moment";
// const Joi = require("joi");
// import { createToaster } from "@meforma/vue-toaster";
// const toaster = createToaster({ });
import { useToast } from 'vue-toastification'

const toast = useToast()
const swal = inject("$swal");


const User = ref([]);
const tag = ref([]);
const categore = ref([]);
const useroptions = ref([]);
const tagoptions = ref("");
const categoreoptions = ref("");
const Slug = ref("");
const Title = ref("");
const errors = ref({});
const date = ref("");
const textarea = ref("");
const status = ref("");
const files = ref("");
const url = ref("");


// const data =ref ({
//     title : "",
//     slug: "",
//     user_id :"",
//     tag_id :[],
//     category_id :"",
//     description :"",
//     status:"",
// });

const addImage = (evt) => {
  const file = evt.target.files[0];
  url.value = URL.createObjectURL(file);
  files.value = file;
};


      function slugify(str) {
        return String(str)
          .normalize('NFKD') // split accented characters into their base characters and diacritical marks
          .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
          .trim() // trim leading or trailing whitespace
          .toLowerCase() // convert to lowercase
          .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
          .replace(/\s+/g, '-') // replace spaces with hyphens
          .replace(/-+/g, '-'); // remove consecutive hyphens
      }

    const slugifytitle=(event)=>{
      Slug.value = slugify(event.target.value)
      

    }
const creatblog = () => {
 
      //   const schema = Joi.object({
      //   title: Joi.string().trim().required().max(100).label('Title'),
      //   slug: Joi.string().trim().required().max(100).label('Slug'),
      //   user_id: Joi.number().required().label('User'),
      //   tag_id: Joi.string().required().label('Tag'),
      //   category_id: Joi.number().required().label('Categories'),
      //   description: Joi.string().trim().required().max(100).label('Description'),
      //   status: Joi.string().trim().required().max(100).label('status'),
      //   });
      //       const { error } = schema.validate(data.value, {
      //        abortEarly: false,
      //         allowUnknown: true,
      //           });
      //     errors.value = {};
      //       error.details?.forEach((element) => {
      //       errors.value[element.path[0]] = element.message;
      //     });

      // if(error.details) return false;


          let user = localStorage.getItem("user");
          user = JSON.parse(user);
          let token = user.token;
          console.log(token);
          date.value = moment(date.value).format("YYYY-MM-DD");
          let formData = new FormData();
          formData.append("title", Title.value);
          formData.append("Slug", Slug.value);
          formData.append("user_id", User.value);
          tag.value.forEach((tag, index) => {
          formData.append(`tag_ids[${index}]`, tag.value);});
          formData.append("category_id", categore.value);
          formData.append("date", date.value);
          formData.append("description", textarea.value);
          formData.append("status", status.value);
          formData.append("image", files.value);

  axios
    .post("https://blog-api-dev.octalinfotech.com/api/blogs/store", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res);
      swal.fire("blog add successfully!", "", "success");
                  toast.success(res.data.message, {
        timeout: 4000
      });
    
    })
    .catch((err) => {
      console.log(err);
    });
      router.push({name: "Blog"});
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
      useroptions.value = data.data.map((value) => {
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

onMounted(() => {
  getTags();
  getusers();
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
  box-shadow: inset 0px 0px 5px rgb(0, 0, 0);
  background-repeat: no-repeat;
}

.form-title {
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  padding-bottom: 6px;
  color: rgb(0, 0, 0);
  text-shadow: 1px 1px 1px black;
  border-bottom: solid 1px white;
  display: flex;
}
.Error{
  color: red;
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
