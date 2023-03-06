<script setup>
import { ref } from "vue";
import {
  firebaseAuthentication,
  onAuthStateChanged,
  signOut,
  firebaseFireStore,
  // timestamp,
  serverTimestamp,
  collection, 
  onSnapshot,
  query, where, deleteDoc, getDocs
} from "@/firebase/database";
import { useRouter } from "vue-router";
import { addDoc } from "@firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
const document_reference = doc(firebaseFireStore, "users", "XDyOm1qZ9SFVTzPOqgaF");
const docSnap = await getDoc(document_reference);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  user.value = docSnap.data().name;
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}


const posts = ref([
  {
    slug: "cardiomyopathy-hcm",
    title: "What are the symptoms of HCM?",
    description: "Common symptoms of HCM",
    content: `Shortness of breath, Chest pain, Palpitations, Light headedness and fainting.
          You may find that you never have any serious problems related to your condition, and with treatment, your symptoms should be controlled. 
          However some people may find that their symptoms worsen or become harder to control in later life.

          The area of heart muscle that is affected by HCM and the amount of stiffening that occurs will determine how the symptoms affect you.`,
    tags: ["hcm", "hcm symptoms"],
  },
  {
    slug: "cardiomyopathy-dcm",
    title: "What are the symptoms of DCM?",
    description: "Common symptoms of DCM",
    content: `In most cases, DCM develops slowly, so some people can have quite severe symptoms before they are diagnosed. The most common symptoms are:
        shortness of breath, swelling of the ankles and abdomen, excessive tiredness and palpitations.`,
    tags: ["dcm", "dcm symptoms"],
  },
]);

const user = ref(null);
const errorLogout = ref(null);

onAuthStateChanged(firebaseAuthentication, (currentUser) => {
  if (currentUser) {
    user.value = currentUser;

    let sub_collection_reference = collection(firebaseFireStore, "users", user.value.uid, "posts");

    onSnapshot(sub_collection_reference, (snapShot) => {
        const snapData = [];

        snapShot.forEach((doc) => {
          snapData.push({
            slug: doc.data().slug,
            title: doc.data().title,
            description: doc.data().description,
            content: doc.data().content,
            tags: doc.data().tags.split(","),
          });
        });

        posts.value = snapData;
      });
  } else {
    user.value == null;
  }
});

const router = useRouter();

function logout() {
  signOut(firebaseAuthentication).then(
    () => {
      user.value = null;
      router.push("login");
    },
    (error) => {
      errorLogout.value = error.message;
    }
  );
}

function addPost(slug, title, description, content, tags) {
  const post = {
    slug: slug,
    title: title,
    description: description,
    content: content,
    tags: tags,
    createdAt: serverTimestamp()
  };

  let sub_collection_reference = collection(firebaseFireStore, "users", user.value.uid, "posts");
  addDoc(sub_collection_reference, post)
}

async function deletePost(slug) {
  let sub_collection_reference = collection(firebaseFireStore, "users", user.value.uid, "posts");
  const d = query(sub_collection_reference, where("slug", "==", slug));
  const docSnap = await getDocs(d);
  docSnap.forEach((doc) => {
    console.log(doc.data())
    deleteDoc(doc.ref);
  });
}
</script>

<template>
  <!-- <div> -->
  <div class="common-layout globalfont center">
    <router-link :to="{ name: 'Login' }">
      <el-button type="success" round v-if="!user"><el-icon><UserFilled /></el-icon>Login</el-button>
    </router-link>
    <router-link :to="{ name: 'PostList' }">
      <el-button type="success" circle v-if="user"><el-icon><HomeFilled /></el-icon></el-button>
    </router-link>
    <router-link :to="{ name: 'Register' }">
      <el-button type="success" round v-if="!user"><el-icon><User /></el-icon>Register</el-button>
    </router-link>

    <h2>The Cardiomyopathy Blog</h2>
  </div>
  <router-view
    :posts="posts"
    :user="user"
    @logout="logout"
    @add-post="addPost"
    @delete-post="deletePost"
    class="globalfont center"
  />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap");

.globalfont {
  font-family: "Open Sans Condensed", sans-serif;
}
.center {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
  text-align: center;
}
</style>
