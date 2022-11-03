<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="form-group">
                <input type="text" class="form-control" v-model="searchKey" placeholder="Keyword" required />
            </div>
            <div class="form-group">
                <button class="btn btn-primary btn-block">Search</button>
            </div>
        </div>
    </div>
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