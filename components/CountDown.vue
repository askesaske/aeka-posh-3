<template>
    <client-only>
        <span>
            <countdown :time="tillTomorrow" :transform="transform">
                <template v-slot="props">
                    {{ props.hours }} : {{ props.minutes }} : {{ props.seconds }}
                </template>
            </countdown>
        </span>
    </client-only>
</template>

<script>
export default {
    data() {
        return {
            tillTomorrow: 0,
        }
    },
    methods: {
        transform(props) {
            const hours = Number(props.days * 24);
            props.hours = props.hours + hours;
            Object.entries(props).forEach(([key, value]) => {
                const digits = value < 10 ? `0${value}` : value;

                props[key] = `${digits}`;
            });

            return props;
        },
    },
    mounted() {
        let now = new Date();

        let then = new Date(now);
        then.setHours(24, 0, 0, 0);
        this.tillTomorrow = then - now;
    }
}
</script>