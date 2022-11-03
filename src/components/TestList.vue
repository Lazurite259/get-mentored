<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="mentor in Mentors" :key="mentor._id">
                        <td>{{ mentor.first_name }}</td>
                        <td>{{ mentor.last_name }}</td>
                        <td>{{ mentor.email }}</td>
                        <td>{{ mentor.password }}</td>
                        <td>
                            <router-link :to="{ name: 'mentor-profile', params: { id: mentor._id } }"
                                class="btn btn-success">Edit
                            </router-link>
                            <button @click.prevent="deleteStudent(mentor._id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            Mentors: []
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api';
        axios.get(apiURL).then(res => {
            this.Mentors = res.data;
        }).catch(error => {
            console.log(error)
        });
    },
    methods: {
        deleteMentor(id) {
            let apiURL = `http://localhost:4000/api/delete-mentor/${id}`;
            let indexOfArrayItem = this.Mentors.findIndex(i => i._id === id);
            if (window.confirm("Do you really want to delete?")) {
                axios.delete(apiURL).then(() => {
                    this.Mentors.splice(indexOfArrayItem, 1);
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
}
</script>
<style>
.btn-success {
    margin-right: 10px;
}
</style>