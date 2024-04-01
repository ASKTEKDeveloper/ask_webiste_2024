INSERT INTO
    TblProductEnquiry (
        UserName,
        PhoneNumber,
        Email,
        City,
        CompanyName,
        Product,
        Remarks,
        CreatedDate
    )
VALUES
    (
        @UserName,
        @PhoneNumber,
        @Email,
        @City,
        @CompanyName,
        @Product,
        @Remarks,
        GETDATE()
    )
SELECT
    SCOPE_IDENTITY() AS EnquiryId 