INSERT INTO
    Tbl_client_reviews (
        CompanyName,
        LogoFileName,
        UserName,
        Designation,
        Review,
        ActiveStatus,
        CreatedBy,
        CreatedDate
    )
VALUES
    (
        @CompanyName,
        @LogoFileName,
        @UserName,
        @Designation,
        @Review,
        @ActiveStatus,
        @CreatedBy,
        GETDATE()
    )
SELECT
    SCOPE_IDENTITY() AS ReviewID