<template>
    <form>
        <h3>Mentee Profile</h3>

        <div class= "form-group">
            <label>First Name</Label>
            <input type="text" class="form-control" v-model="first_name" placeholder=""/>
        </div>

        <div class= "form-group">
            <label>Last Name</Label>
            <input type="text" class="form-control" v-model="last_name" placeholder=""/>
        </div>

        <div class= "form-group">
            <label>Email</Label>
            <input type="text" class="form-control" v-model="email" placeholder=""/>
        </div>

        <div class= "form-group">
            <label>Password</Label>
            <input type="password" class="form-control" v-model="password" placeholder=""/>
        </div>

        <div class= "form-group">
            <label>Occupation Title</Label>
            <input type="text" class="form-control" v-model="occupation_title" placeholder=""/>
        </div>

        <div class= "form-group">
            <label>Company Name</Label>
            <input type="text" class="form-control" v-model="company_name" placeholder=""/>
        </div>

        <div class= "form-group">
            <label>Education Level</Label>
            <input type="text" class="form-control" v-model="education_evel" placeholder=""/>
        </div>

        <div class= "form-group">
            <label>Work Experience</Label>
            <input type="text" class="form-control" v-model="work_experience" placeholder=""/>
        </div>

        <div class= "form-group">
            <label>Skills</Label>
            <input type="text" class="form-control" v-model="skills" placeholder=""/>
        </div>

        <div class= "form-group">
            <label>Interested Industry</Label>
            <input type="text" class="form-control" v-model="interested_industry" placeholder=""/>
        </div>

        <div class= "form-group">
            <label>Occupation Title</Label>
            <input type="text" class="form-control" v-model="occupation_title" placeholder=""/>
        </div>


        <div class= "form-group">
            <label>Linkedin</Label>
            <input type="text" class="form-control" v-model="linkedin" placeholder=""/>
        </div>

        <button class="btn btn-primary btn-block">Save</button>
    </form>
</template>
<script>
export default {
    data() {
        return {
            searchKey,
        }
    }
}
</script>