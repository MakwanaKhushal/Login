import { createRouter, createWebHistory } from "vue-router";
import Auth from "./Middlewer/Auth";
import middlewarePipeline from "./Middlewer/middleware-pipeline";

const routes = [
  {
    path: "/loginPage",
    name: "LoginPage",
    
  
    component: () => import("../components/LoginPage.vue"),
  },

  {
    path: "/",
    name: "WebPage",
 
    component: () => import('@/components/Webpage/WebPage'),
  },
  {
    path: "/blogShow/:id",
    name: "BlogShow",
 
    component: () => import('@/components/Webpage/BlogShow'),
  },
  {
    path: "/relatedblogshow/:id",
    name: "RelatedBlogshow",
 
    component: () => import('@/components/Webpage/RelatedBlogshow'),
  },
  {
    path: "/categorieshow/:id",
    name: "CategorieShow",
 
    component: () => import('../components/Webpage/CategorieShow.vue'),
  },
  {
    path: "/contactsuspage",
    name: "ContactsusPage",
 
    component: () => import('@/components/Webpage/ContactsusPage.vue'),
  },


  
  {
    path: "/admin",
    name: "Admin",
    redirect : '/admin/deshBoard',
    meta: {
      middleware: [Auth],
    },
    
    component : ()=> import('@/components/Admin'),
    children : [
      {
        path: "user",
        name: "User",
        
      
        component: () => import("../components/User.vue"),
      },

      {
        path: "deshBoard",
        name: "DeshBoard",
     
        component: () => import("./DeshBoard.vue"),
      },
      {
        path: "/blogdetails/:id",
        name: "BlogDetails",
     
        component: () => import("./BlogDetails.vue"),
      },
      {
        path: "blog",
        name: "Blog",
    
        component: () => import("./Blog.vue"),
      },
      {
        path: "categories",
        name: "Categories",
    
        component: () => import("./Categories.vue"),
      },
      {
        path: "tags",
        name: "Tags",
      
        component: () => import("@/components/Tags.vue"),
      },
      {
        path: "contact-us",
        name: "Contact-us",
      
        component: () => import("@/components/Contacts.vue"),
      },
  
      {
        path: "creatblog",
        name: "CreatBlog",
      
        component: () => import("../components/CreatBlog.vue"),
      },
      {
        path: "editblog/:id",
        name: "EditBlog",
        meta: {
          middleware: [Auth],
        },
        component: () => import("../components/EditBlog.vue"),
      },
    ]
  },
  {
    name: "/PageNotFound",
    path: "/:pathMatch(.*)*",
    component: () => import("../components/PageNotFound.vue"),
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  /** Navigate to next if middleware is not applied */
  if (!to.meta.middleware) {
    return next();
  }

  const middleware = to.meta.middleware;
  const context = {
    to,
    from,
    next,
    //   store  | You can also pass store as an argument
  };

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
