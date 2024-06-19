import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { School } from './school'

export interface Member {
  id: Number,
  name: String,
  token: String,
  school: School,
}

type CurrentMember = undefined | Member;

export const useMemberStore = defineStore(
  'member',
  () => {
    const profile = ref<CurrentMember>()

    const setProfile = (val: CurrentMember) => {
      profile.value = val
    }

    const clearProfile = () => {
      profile.value = undefined
    }

    return {
      profile,
      setProfile,
      clearProfile,
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
