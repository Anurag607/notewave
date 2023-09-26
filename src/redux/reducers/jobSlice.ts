import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { jobType } from "@/utlis/types";

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobData: [] as jobType[],
    backupData: [] as jobType[],
    categoryData: [] as any[],
    sort_market_cap: "desc",
    sort_current_price: "asc",
  },
  reducers: {
    setJobData: (state, action: PayloadAction<jobType[]>) => {
      state.jobData = action.payload;
      state.backupData = action.payload;
    },
    setCategoryData: (state, action: PayloadAction<any[]>) => {
      state.categoryData = action.payload;
    },
    clearJobData: (state) => {
      state.jobData = [];
    },
    sortJobData: (state, action: PayloadAction<jobType[]>) => {
      state.jobData = action.payload;
    },
    setSortingDirCP: (state, action: PayloadAction<string>) => {
      state.sort_current_price = action.payload;
    },
    setSortingDirMC: (state, action: PayloadAction<string>) => {
      state.sort_market_cap = action.payload;
    },
    filterJobData: (state, action: PayloadAction<string>) => {
      let tokens = action.payload
        .toLowerCase()
        .split(" ")
        .filter(function (token: string) {
          return token.trim() !== "";
        });
      let searchTermRegex = new RegExp(tokens.join("|"), "gim");
      let filteredResults: any[] = [];
      let jobString = "";

      if (tokens.length === 0) {
        state.jobData = state.backupData;
      } else {
        state.jobData.forEach((job: any) => {
          jobString += job.name.toLowerCase() + job.symbol.toLowerCase();
          if (jobString.match(searchTermRegex)) {
            filteredResults.push(job);
            jobString = "";
          }
        });
      }
      state.jobData = filteredResults;
    },
  },
});

export const {
  setJobData,
  setCategoryData,
  clearJobData,
  sortJobData,
  filterJobData,
  setSortingDirCP,
  setSortingDirMC,
} = jobSlice.actions;

export default jobSlice.reducer;
