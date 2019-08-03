<template>
	<div class="developer-section">
		<div class='section'>
			<div 
				v-for="(dev,i) in getDevLists" :key="i" 
				:class="i == 0 ? 'first-avatar' : ''" 
				class='dev-container'>
					<div class='items-container'>
						<img :src="dev.avatar" class="avatar">
						<div class="m-2">{{dev.name}}</div>
						<div>{{dev.title}}</div>
					</div>
			</div>
		</div>
	</div>
</template>

<script>
import vashAvatar from "@/assets/awesome-devs/vash.png"
import jinikAvatar from "@/assets/awesome-devs/jinik.png"
import bsnmanAvatar from "@/assets/awesome-devs/bsnman.png"
import dildoeAvatar from "@/assets/awesome-devs/dildoe.png"
import niruAvatar from "@/assets/awesome-devs/niru.png"
export default {
	data(){
		return{
			devList: [
				{	avatar: vashAvatar,
					name: 'Vash',
					title: 'Software Developer'	},
				{	avatar: jinikAvatar,
					name: 'Jinik',
					title: 'Software Developer' },
				{ avatar: bsnmanAvatar,
					name: 'Bsnman',
					title: 'Software Developer'	},
				{ avatar: dildoeAvatar,
					name: 'Dildoe',
					title: 'Software Developer' },
				{	avatar: niruAvatar,
					name: 'Niru',
					title: 'Software Developer' }
			]
		}
	},
	computed:{
		getDevLists(){
			return this.devList.concat(this.devList)
		}
	}
}
</script>

<style>
.developer-section{
	margin: 10px auto;
	@apply whitespace-no-wrap overflow-hidden
}
.section{
	width: 60vw;
	height: 250px;
	overflow: visible;
	margin: 15px auto;
}
.dev-container{
	width: 60vw;
	height: 200px;
	@apply p-2 inline-block;
}

.items-container{
	@apply flex flex-col items-center
}

.avatar {
  width: 150px;
  height: 150px;
	@apply rounded-full
}

.first-avatar {
	animation: bannermove 20s ease-in-out infinite;
}

@keyframes bannermove {
 0% {
	margin-left: -60vw; 
 }
 10% {
	margin-left: -60vw; 
 }
 20% {
	margin-left: -120vw; 
 }
 30% {
	margin-left: -120vw; 
 }
 40% {
	margin-left: -180vw; 
 }
 50% {
	margin-left: -180vw; 
 }
 60% {
	margin-left: -240vw; 
 }
 70% {
	margin-left: -240vw; 
 }
 80% {
	margin-left: -300vw; 
 }
 90% {
	margin-left: -300vw; 
 }
 100% {
	margin-left: -360vw; 
 }
}

.section div:hover {
 transform: scale(1.1);
 cursor: pointer;
 /* box-shadow: 0px 3px 5px rgba(0,0,0,0.2); */
}

.section:hover .first-avatar{
	/* animation-play-state: paused; */
}
</style>
