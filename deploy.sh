if [ -z "$1" ]; then
    echo "missing target org parameter"
    exit 1
fi

sf project deploy start --target-org $1
sf org assign permset --name TwoSumUser --target-org $1