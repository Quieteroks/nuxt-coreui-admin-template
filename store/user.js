export const state = () => ({
  fullName: "Ilya Karavaev",
  avatarImage: "/uploads/avatar.png"
});

export const mutations = {
  login (state, data) {
    state.fullName = data.fullName;
    state.avatarImage = data.avatarImage;
  }
};
