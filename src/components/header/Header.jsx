import { React, useState } from "react";
import { UserOutlined, SearchOutlined, FlagOutlined } from "@ant-design/icons";
import { Layout, Dropdown, Space, Button, Avatar, Input } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    const navigate = useNavigate();
    const [currentLanguage, setCurrentLanguage] = useState("Vietnamese");
    const accountItems = [
        {
            key: "1",
            label: "Profile",
        },
        {
            key: "2",
            label: "Settings",
        },
        {
            key: "3",
            label: "Logout",
        },
    ];

    // const languageItems = [
    //     {
    //         key: "1",
    //         label: "English",
    //     },
    //     {
    //         key: "2",
    //         label: "Vietnamese",
    //     },
    // ];
    const languageItems = [
        {
            key: "1",
            label: (
                <span onClick={() => handleLanguageChange("English")}>English</span>
            ),
        },
        {
            key: "2",
            label: (
                <span onClick={() => handleLanguageChange("Vietnamese")}>Vietnamese</span>
            ),
        },
    ];

    const handleLanguageChange = (language) => {
        setCurrentLanguage(language);
    };

    const getLanguageIcon = () => {
        switch (currentLanguage) {
            case "English":
                return <img src="../../public/icons/united-kingdom.png" alt="English" style={{ width: 24, height: 24, borderRadius: '50%' }} />;
            case "Vietnamese":
            default:
                return <img src="../../public/icons/vietnam.png" alt="Vietnamese" style={{ width: 24, height: 24, borderRadius: '50%' }} />;
        }
    };
    return (
        <Layout.Header className={styles.header}>
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3062439e878fdc5fcca6cdd6c226ab7d3c71c76a"
                alt="Ticketbox"
                className={styles.logo}
                onClick={() => navigate("/")}
            />
            <Input
                placeholder="Tìm kiếm của bạn"
                style={{
                    width: 350,
                    borderRadius: '20px',
                    verticalAlign: 'middle',
                }}
                prefix={<SearchOutlined />}
            />

            <div className={styles.rightSection}>
                <div className={styles.ticketSection}>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/34d5db51df98b9fbb6c6fb32efbbf4b62dd6e77a"
                        alt="Ticket"
                        className={styles.ticketIcon}
                    />
                    <span className={styles.ticketText}>Vé đã mua</span>
                </div>

                <Space className={styles.menuSection}>
                    <Dropdown
                        menu={{ items: accountItems }}
                        placement="bottomRight"
                        trigger={["click"]}
                    >
                        <Button type="text" className={styles.accountButton}>
                            <Avatar size={32} icon={<UserOutlined />} />
                        </Button>
                    </Dropdown>
                    <Dropdown
                        menu={{ items: languageItems }}
                        placement="bottomRight"
                        trigger={["click"]}
                    >
                        <Button type="text" className={styles.languageButton}>
                            <Space>
                                <Avatar size={24} src={currentLanguage === "English" ? "../../public/icons/united-kingdom.png" : "/icons/vietnam.png"} />
                                <div>Ngôn ngữ</div>
                            </Space>
                        </Button>
                    </Dropdown>

                    <Button
                        type="text"
                        className={styles.mobileMenuButton}
                        icon={<span className="ti ti-menu-2" />}
                    />
                </Space>
            </div>
        </Layout.Header>
    );
};

export default Header
