<script lang="ts">
  import Router from "svelte-spa-router"; 


  import Home from "./routes/Home.svelte";
  import Login from "./routes/Login.svelte";
  import NotFound from "./routes/NotFound.svelte";
  import ResetPassword from "./routes/Reset-password.svelte";
  import ResetPassword2 from "./routes/Reset-password-2.svelte";
  import ResetPassword3 from "./routes/Reset-password-3.svelte";
  import ResetPassword4 from "./routes/Reset-password-4.svelte";
  import RegisterStudent from "./routes/Register-student.svelte";
  import RegisterOfficer from "./routes/Register-officer.svelte";
  import SettingAccountStudent from "./routes/Setting-account-student.svelte";
  import SettingAccountOfficer from "./routes/Setting-account-officer.svelte";
  import EventList from "./routes/Eventlist.svelte";
  import EventList1 from "./routes/Eventlist-1.svelte";
  import EventList2 from "./routes/Eventlist-2.svelte";
  import EventList3 from "./routes/Eventlist-3.svelte";
  import MyeventsUpcoming from "./routes/Myevents-upcoming.svelte";
  import MyeventsUpcoming2 from "./routes/Myevents-upcoming-2.svelte";
  import MyeventsHistory from "./routes/Myevents-history.svelte";
  import MonthlyRewardInprogressUser from "./routes/Monthly-reward-inprogress-user.svelte";
  import MonthlyReward from "./routes/Monthly-reward.svelte";
  import MonthlyRewardCompletedUser from "./routes/Monthly-reward-completed-user.svelte";
  import EventverifyOfficer from "./routes/Eventverify-officer.svelte";
  import UploadProofOfficer from "./routes/Upload-proof-officer.svelte";
  import UploadProofOfficer2 from "./routes/Upload-proof-officer-2.svelte";
  import CreateeventOfficer from "./routes/Createevent-officer.svelte";
  import CreateeventOfficer2 from "./routes/Createevent-officer-2.svelte";
  
  let routes = {
    "/home": Home,
    "/login": Login,
    "/reset-password": ResetPassword,
    "/reset-password-2": ResetPassword2,
    "/reset-password-3": ResetPassword3,
    "/reset-password-4": ResetPassword4,
    "/register-student": RegisterStudent,
    "/regisrer-officer": RegisterOfficer,
    "/setting-accoount-student": SettingAccountStudent,
    "/setting-accouunt-officer": SettingAccountOfficer,
    "/eventlist": EventList,
    "/eventlist-1": EventList1,
    "/eventlist-2": EventList2,
    "/eventlist-3": EventList3,
    "/myevents-upcoming": MyeventsUpcoming,
    "/myevents-upcoming-2": MyeventsUpcoming2,
    "/myevents-history": MyeventsHistory,
    "/monthly-reward-inprogress-user": MonthlyRewardInprogressUser,
    "/monthly-reward-completed-user": MonthlyRewardCompletedUser, 
    "/eventverify-officer": EventverifyOfficer,
    "/upload-proof-officer": UploadProofOfficer,
    "/upload-proof-officer-2": UploadProofOfficer2,
    "/createevent-officer": CreateeventOfficer,
    "/createevent-officer-2": CreateeventOfficer2,
    "/monthly-reward": MonthlyReward,

    


    "*": NotFound
  }

</script>


<main>
  <Router {routes} />
</main>

