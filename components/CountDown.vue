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

        let first = new Date(2023, 6, 30, 0, 0, 0);
        let second = new Date(2023, 7, 1, 0, 0, 0);

        if (first > now) {
            this.tillTomorrow = first - now;
            this.$emit('price', '3 900');

            return;
        }

        if (second > now) {
            this.tillTomorrow = second - now;
            this.$emit('price', '4 900');
        }
    }
}
</script>