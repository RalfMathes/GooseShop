#!/bin/bash
echo " ██████╗  ██████╗  ██████╗ ███████╗███████╗    ███████╗██╗  ██╗ ██████╗ ██████╗ "
echo "██╔════╝ ██╔═══██╗██╔═══██╗██╔════╝██╔════╝    ██╔════╝██║  ██║██╔═══██╗██╔══██╗"
echo "██║  ███╗██║   ██║██║   ██║███████╗█████╗      ███████╗███████║██║   ██║██████╔╝"
echo "██║   ██║██║   ██║██║   ██║╚════██║██╔══╝      ╚════██║██╔══██║██║   ██║██╔═══╝ "
echo "╚██████╔╝╚██████╔╝╚██████╔╝███████║███████╗    ███████║██║  ██║╚██████╔╝██║     "
echo " ╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝╚══════╝    ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝"
echo ""
echo "================================================================================"
echo ""
while true; do
    read -p "Do you wish to execute the Install procedure? (Entering no skips to starting the project) [y/n] : " yn
    case $yn in
    [Yy]* )
        echo "Looking for node_modules folder in backend"
        if [ -d "./backend/node_modules" ]; then
            while true; do
            read -p "node_modules folder exists in backend. Do you want to re-install? [y/n] : " yn
            case $yn in
                [Yy]* )
                    cd ./backend;
                    echo "removing node_modules...";
                    rm -rf ./backend/node_modules;
                    echo "installing node_modules...";
                    npm install;
                    cd ..;
                    break;;
                [Nn]* ) break;;
                * ) echo "Please answer yes or no.";;
            esac;
        done

        else
            while true; do
            read -p "node_modules folder does not exist in backend. Install? [y/n] : " yn
            case $yn in
                [Yy]* ) cd ./backend;
                    echo "installing node_modules...";
                    npm install;
                    cd ..;
                    break;;
                [Nn]* )
                    echo "Can't run project without node modules. Exiting...";
                    exit;;
                * ) echo "Please answer yes or no.";;
            esac;
        done
        fi
        echo "Looking for node_modules folder in frontend"
        if [ -d "./frontend/node_modules" ]; then
            while true; do
            read -p "node_modules folder exists in frontend. Do you want to re-install? [y/n] : " yn
            case $yn in
                [Yy]* )
                    cd ./frontend;
                    echo "removing node_modules...";
                    rm -rf ./frontend/node_modules;
                    echo "installing node_modules...";
                    npm install;
                    cd ..;
                    break;;
                [Nn]* ) break;;
                * ) echo "Please answer yes or no.";;
            esac;
        done

        else
            while true; do
            read -p "node_modules folder does not exist in frontend. Install? [y/n] : " yn
            case $yn in
                [Yy]* ) cd ./frontend;
                    echo "installing node_modules...";
                    npm install;
                    cd ..;
                    break;;
                [Nn]* )
                    echo "Can't run project without node modules. Exiting...";
                    exit;;
                * ) echo "Please answer yes or no.";;
            esac;
        done
        fi
        break;;
    [Nn]* ) break;;
    * ) echo "Please answer yes or no.";;
esac;
done
echo "Starting backend and frontend..."
(cd ./backend && npm start -s &)
(cd ./frontend && npm run dev)
pkill node
