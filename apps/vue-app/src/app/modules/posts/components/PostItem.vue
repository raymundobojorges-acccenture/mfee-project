<template>
  <div class="col-md-12 col-lg-6">
    <div class="card bg-dark text-white">
      <img src="https://cdn.pixabay.com/photo/2017/02/22/17/06/wave-2089959_960_720.jpg" class="card-img" />
      <div @click="goToPostDetail" class="card-img-overlay mt-3 ms-3 card-img">
        <div class="card-content">
          <h1 class="display-5">Post 1</h1>
          <p class="card-text fs-5">
            <em>10 comments </em>
            <i class="fa-solid fa-comment"></i>
          </p>
          <p class="card-text fs-5">Description</p>
          <p class="card-text fs-5 text-uppercase">
            <strong>Category 1</strong>
          </p>
        </div>
      </div>
      <div class="card-img-overlay card-buttons">
        <div class="d-flex justify-content-end align-items-center ms-4">
          <i @click="editPost" class="fa-solid fa-pen pe-3" data-bs-toggle="modal" data-bs-target="#createPostModal"></i>
          <i @click="deletePost" class="fa-solid fa-trash"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  methods:{
    goToPostDetail(id){},
    editPost(){
      console.log("edot")
    },
    deletePost(){
      console.log("delete")
    }
  }
}
</script>

<style>
.col-md-12,
.col-lg-6 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
.card {
  border: 0;
  border-radius: 0;
}
.card:hover {
  cursor: pointer;
}
.card-content {
  display: flex;
  justify-content: end;
  flex-direction: column;
  height: 100%;
}
.card-img {
  bottom: 40px;
}
.card-buttons {
  top: 85%;
}
</style>
