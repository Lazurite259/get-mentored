<template>
    <form>
        <h3>Mentor Profile</h3>

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
            <label>Occupation Title</Label>
            <input type="text" class="form-control" v-model="occupation_title" placeholder=""/>
        </div>

        <div class= "form-group">
            <label>Year Of Experience</Label>
            <input type="text" class="form-control" v-model="year_of_experience" placeholder=""/>
        </div>

        <div class= "form-group">
            <label>Office Hour</Label>
            <input type="text" class="form-control" v-model="office_hour" placeholder=""/>
        </div>

        <div class= "form-group">
            <label>Linkedin</Label>
            <input type="text" class="form-control" v-model="Linkedin" placeholder=""/>
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