import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface School {
  id: string,
  name: string,
  adress?: string,
  area?: string,
}

export type CurrentSchool = undefined | School;

export const useSchoolStore = defineStore(
  'school',
  () => {
    const curSchool = ref<CurrentSchool>()

    const setCurSchool = (val: CurrentSchool) => {
      curSchool.value = val
    }

    const clearCurSchool = () => {
      curSchool.value = undefined
    }

    return {
      curSchool,
      setCurSchool,
      clearCurSchool,
    }
  },
  {
    persist: {
      storage: {
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
        getItem(key) {
          return uni.getStorageSync(key)
        },
      },
    },
  },
)